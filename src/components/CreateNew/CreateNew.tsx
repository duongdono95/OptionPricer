import { PlusSquare, Send } from "lucide-react";
import "./CreateNew.scss";
import React from "react";
import { pemTableStore } from "../../Zustand/pemTableStore";

const CreateNew = () => {
  const { isCreateMode, setIsCreateMode } = pemTableStore();
  return (
    <div className={isCreateMode ? "create-new isCreateMode" : "create-new"}>
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
