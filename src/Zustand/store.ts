import {
  OptionProperties,
  OptionType,
} from "@pantheon-tech/bsm-optionmodel";
import create from "zustand";
import { GetOption } from "../helpers/getOption";
import { EmptyDataRow } from "../types/constant";

interface State {
  isCreateMode: boolean;
  initialOptionType: OptionType.PUT | OptionType.CALL;
  tableRowDataArr: OptionProperties[] | [];
}
interface Action {
  setIsCreateMode: (
    isLoading: State["isCreateMode"]
  ) => void;
  setInitialOptionType: (
    optionType: State["initialOptionType"]
  ) => void;
  setTableRowDataArr: (newRow: OptionProperties) => void;
}

const optionProps = GetOption();

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
    tableRowDataArr: [
      optionProps ? optionProps : EmptyDataRow,
    ],
    setTableRowDataArr: (newRow: OptionProperties) =>
      set((state) => ({
        tableRowDataArr: [...state.tableRowDataArr, newRow],
      })),
  })
);
