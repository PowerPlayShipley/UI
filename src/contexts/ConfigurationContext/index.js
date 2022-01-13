/**
 * Hold the data from the `https://conf.api.powerplayfines.co.uk`. Possibly will be replaced with redux in
 * the future. This will be helpful for sharing the data with pages `https://www.powerplayfines.co.uk/seasons/*`
 * */
import React, { createContext } from "react";

const ConfigurationContext = createContext({
  players: {},
  fines: {},
  meta: {}
})

export default ConfigurationContext
