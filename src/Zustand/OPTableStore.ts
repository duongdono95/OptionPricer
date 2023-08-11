import {
  OptionProperties,
} from "@pantheon-tech/bsm-optionmodel";

import {create} from "zustand";

interface OPTableStates {
  isCreateMode: boolean;
  tableRowDataArr: OptionProperties[] | [];
}
interface OPTableActions {
  setIsCreateMode: (
    isLoading: OPTableStates["isCreateMode"]
  ) => void;
  setTableRowDataArr: (newRow: OptionProperties) => void;
}

export const OPTableStore = create<OPTableStates & OPTableActions>()(
  (set) => ({
    //  Create a new row
    isCreateMode: false,
    setIsCreateMode: (isCreateMode: boolean) =>
      set(() => ({ isCreateMode: isCreateMode })),

    //initial Table Data
    tableRowDataArr: [],
    setTableRowDataArr: (newRow: OptionProperties) =>
      set((state) => ({
        tableRowDataArr: [...state.tableRowDataArr, newRow],
      })),

  })
);
