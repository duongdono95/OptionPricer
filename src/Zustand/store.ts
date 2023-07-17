import create from "zustand";

interface CreateNewRow {
  isCreateMode: boolean;
  setIsCreateMode: (isLoading: boolean) => void;
}

export const useGenerationStore = create<CreateNewRow>()((set) => ({
  isCreateMode: false,
  setIsCreateMode: (isCreateMode : boolean) => set({isCreateMode})
}))