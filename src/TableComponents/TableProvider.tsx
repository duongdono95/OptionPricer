import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

type TableState = {
  isCreateMode: Boolean;
  setIsCreateMode: Dispatch<SetStateAction<Boolean>>;
};

const TableContext = createContext<TableState | null>(null);

const useTableContext = (): TableState => {
  const context = useContext(TableContext);
  if (!context) {
    throw new Error("Please use TableProvider in parent component");
  }

  return context;
};

export const TableProvider = (props: PropsWithChildren) => {
  const [isCreateMode, setIsCreateMode] = useState<Boolean>(false);
  return (
    <TableContext.Provider value={{ isCreateMode, setIsCreateMode }}>
      {props.children}
    </TableContext.Provider>
  );
};

export default useTableContext;
