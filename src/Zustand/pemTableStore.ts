import {
  OptionProperties,
} from "@pantheon-tech/bsm-optionmodel";

import create from "zustand";

interface PemTableState {
  isCreateMode: boolean;
  tableRowDataArr: OptionProperties[] | [];
}
interface PemTableAction {
  setIsCreateMode: (
    isLoading: PemTableState["isCreateMode"]
  ) => void;
  setTableRowDataArr: (newRow: OptionProperties) => void;
}

export const pemTableStore = create<PemTableState & PemTableAction>()(
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
