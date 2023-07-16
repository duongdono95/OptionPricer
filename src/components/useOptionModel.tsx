import {
  OptionProperties,
  OptionModelBSM,
  OptionParameters,
} from "@pantheon-tech/bsm-optionmodel";
import React from "react";
type SetPropFunction<
  T extends keyof OptionParameters = keyof OptionParameters
> = (prop: T, value: OptionParameters[T]) => void;

export const useOptionModel = (
  params: OptionParameters
): [SetPropFunction, OptionProperties | null] => {
  // console.log("hook rendered");
  const [optionModel] = React.useState(OptionModelBSM.newOptionModel(params));

  const setProperty: SetPropFunction = React.useCallback((prop, value) => {
    // sets the property of the option model.
    // console.log("set prop ", prop, " to value ", value);
    optionModel.update("impliedVolatility", 0.5);
  }, []);

  const [optionState, setOptionState] = React.useState<OptionProperties | null>(
    null
  );

  React.useEffect(() => {
    optionModel.on("update", (state: OptionProperties) =>
      setOptionState(state)
    );

    return () => void optionModel.removeAllListeners();
  }, []);

  return [setProperty, optionState];
};
