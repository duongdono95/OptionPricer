import { PlusSquare, Send } from "lucide-react";
import "./OPTableButtons.scss";
import React from "react";
import OPButton from "./OPButton";

const CreateNewBTN = () => {
  return (
    <OPButton className="primary">
      <PlusSquare />
      <p>Create New Row</p>
    </OPButton>
  );
};

const PostNewBTN = () => {
  return (
    <OPButton className="primary">
      <Send />
      <p>Post New Row</p>
    </OPButton>
  );
};

const CancelBTN = () => {
  return (
    <OPButton className="secondary">
      <p>Cancel</p>
    </OPButton>
  );
};

const TrashBTN = () => {
  return;
};

export const OPTableButtons = {
  Create: CreateNewBTN,
  Post: PostNewBTN,
  Cancel: CancelBTN,
};
