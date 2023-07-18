import { PlusSquare, Send } from "lucide-react";
import "./CreateNew.scss";
import React from "react";
import { zustandStore } from "../../Zustand/store";

const CreateNew = () => {
  const { isCreateMode, setIsCreateMode } = zustandStore();
  return (
    <div
      className={
        isCreateMode
          ? "create-new isCreateMode"
          : "create-new"
      }
    >
      {isCreateMode ? (
        <div onClick={() => setIsCreateMode(!isCreateMode)}>
          <Send />
        </div>
      ) : (
        <PlusSquare />
      )}
      {isCreateMode ? "Post New Row" : "Create New Row"}
    </div>
  );
};

export default CreateNew;
