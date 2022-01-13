import React, { useState } from "react";
import PropTypes from "prop-types";

import ConfigurationContext from "../../contexts/ConfigurationContext";

const ConfigurationProvider = ({ children, configuration: initial }) => {
  // TODO: Set this up when the API is working
  const [configuration, _] = useState(initial)

  return (
    <ConfigurationContext.Provider value={configuration}>
      {children}
    </ConfigurationContext.Provider>
  )
}

ConfigurationProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ]),
  configuration: PropTypes.shape({
    players: PropTypes.object,
    fines: PropTypes.object,
    meta: PropTypes.object,
  }).isRequired
}

export default ConfigurationProvider
