import { useMemo } from "react";

const useFinesConfiguration = (initial) => {
  const finesConfiguration = useMemo(() => Object.keys(initial.fines).map((key) => ({
    value: key,
    tooltip: initial.fines[key].name
  })), [initial])

  return ({ finesConfiguration, config: initial })
}

export default useFinesConfiguration
