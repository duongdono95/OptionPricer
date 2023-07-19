import {
  OptionProperties,
  OptionType,
} from "@pantheon-tech/bsm-optionmodel";

import create from "zustand";
import { EmptyDataRow } from "../types/constant";

interface State {
  isCreateMode: boolean;
  initialOptionType: OptionType.PUT | OptionType.CALL;
  tableRowDataArr: OptionProperties[] | [];
  emptyOption: OptionProperties;
}
interface Action {
  setIsCreateMode: (
    isLoading: State["isCreateMode"]
  ) => void;
  setInitialOptionType: (
    optionType: State["initialOptionType"]
  ) => void;
  setTableRowDataArr: (newRow: OptionProperties) => void;
  setEmptyOption: (newOption: OptionProperties) => void;
}

export const zustandStore = create<State & Action>()(
  (set) => ({
    //  Create a new row
    isCreateMode: false,
    setIsCreateMode: (isCreateMode: boolean) =>
      set(() => ({ isCreateMode: isCreateMode })),

    //Initial Option Type
    initialOptionType: OptionType.PUT,
    setInitialOptionType: (
      optionType: OptionType.PUT | OptionType.CALL
    ) => set(() => ({ initialOptionType: optionType })),

    //initial Table Data
    tableRowDataArr: [],
    setTableRowDataArr: (newRow: OptionProperties) =>
      set((state) => ({
        tableRowDataArr: [...state.tableRowDataArr, newRow],
      })),

    //empty Option
    emptyOption: EmptyDataRow,
    setEmptyOption: (newOption: OptionProperties) =>
      set((state) => ({
        emptyOption: {
          daysToExpiry: newOption.daysToExpiry,
          yearsToExpiry: newOption.yearsToExpiry,
          optionPrice: newOption.optionPrice,
          greeks: {
            P: {
              price: newOption.greeks.P.price,
              delta: newOption.greeks.P.delta,
              gamma: newOption.greeks.P.gamma,
              theta: newOption.greeks.P.theta,
              vega: newOption.greeks.P.vega,
              rho: newOption.greeks.P.rho,
            },
            C: {
              price: newOption.greeks.C.price,
              delta: newOption.greeks.C.delta,
              gamma: newOption.greeks.C.gamma,
              theta: newOption.greeks.C.theta,
              vega: newOption.greeks.C.vega,
              rho: newOption.greeks.C.rho,
            },
          },
          optionType: OptionType.PUT,
          underlyingPrice: newOption.underlyingPrice,
          strikePrice: newOption.strikePrice,
          expiryDate: newOption.expiryDate,
          riskFreeRate: newOption.riskFreeRate,
          dividendYield: newOption.dividendYield,
          impliedVolatility: newOption.impliedVolatility,
        },
      })),
  })
);
