import React, { useState, useEffect } from "react";

import useConfig from "../useConfig";
import APIFines from "../../utils/api/fines";

function withFines(WrappedComponent, onNewFinesData = (data) => (data)) {
  const IsolatedFinesComponent = ({ section, season, event }) => {
    const [fines, setFines] = useState([])

    const { useFinesConfiguration } = useConfig()
    const { finesConfiguration } = useFinesConfiguration()

    // Start the socket
    useEffect(() => {
      APIFines._instance().start(season, event)
      return () => {
        APIFines._instance().stop()
      }
    }, [season, event])

    // Subscribe to changes
    useEffect(() => {
      APIFines.subscribe((data) => {
        setFines(onNewFinesData(data))
      })
    }, [])

    return <WrappedComponent data={fines} configuration={finesConfiguration} title={section} />
  }

  const wrappedComponentName = WrappedComponent.displayName
    || WrappedComponent.name
    || 'IsolatedFinesComponent';

  IsolatedFinesComponent.displayName = `withFines(${wrappedComponentName})`;

  return IsolatedFinesComponent
}

export default withFines
