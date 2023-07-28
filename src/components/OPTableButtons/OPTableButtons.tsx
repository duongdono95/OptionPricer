import { PlusSquare, Send, Trash } from "lucide-react";
import "./OPTableButtons.scss";
import React from "react";
import DynamicButton from "./DynamicButton";

const CreateNewBTN = ({ ...props }) => {
  return (
    <DynamicButton className="primary" {...props}>
      <PlusSquare />
      <p>Create New Row</p>
    </DynamicButton>
  );
};

const PostNewBTN = ({ ...props }) => {
  return (
    <DynamicButton className="primary" {...props}>
      <Send />
      <p>Post New Row</p>
    </DynamicButton>
  );
};

const CancelBTN = ({ ...props }) => {
  return (
    <DynamicButton className="secondary" {...props}>
      <p>Cancel</p>
    </DynamicButton>
  );
};

const TrashBTN = ({ ...props }) => {
  return (
    <DynamicButton className="secondary" {...props}>
      <Trash size={16} strokeWidth={3} />
    </DynamicButton>
  );
};

export const OPTableButtons = {
  Create: CreateNewBTN,
  Post: PostNewBTN,
  Cancel: CancelBTN,
  Delete: TrashBTN,
};
