import {useContext, useMemo} from 'react'

import ConfigurationContext from "../../contexts/ConfigurationContext";

const messages = {
  context: 'useConfiguration must be used within a ConfigurationProvider',
  initial: 'useConfiguration should have a initial value passed if not used inside ConfigurationProvider'
}

const errorMessage = `${messages.context} or ${messages.initial}`

function useConfiguration (initial) {
  const configurationFromContext = useContext(ConfigurationContext)
  const configuration = !!initial ? initial : configurationFromContext

  if (configuration === undefined) {
    throw new Error(errorMessage)
  }

  const finesConfiguration = useMemo(() => Object.keys(configuration.fines).map((key) => ({
    value: key,
    tooltip: configuration.fines[key].name
  })), [configuration])

  return ({ fines: finesConfiguration, players: configuration.players, configuration })
}

export default useConfiguration
