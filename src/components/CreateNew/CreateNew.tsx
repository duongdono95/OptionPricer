import { PlusSquare, Send } from "lucide-react";
import "./CreateNew.scss";
import React from "react";

const CreateNew = () => {
  const isCreateMode = false;
  return (
    <div className={isCreateMode ? "create-new isCreateMode" : "create-new"}>
      {isCreateMode ? <Send /> : <PlusSquare />}
      {isCreateMode ? "Post New Row" : "Create New Row"}
    </div>
  );
};

export default CreateNew;
