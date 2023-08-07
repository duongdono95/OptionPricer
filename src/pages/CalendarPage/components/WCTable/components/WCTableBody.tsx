import React from "react";
import Tbody from "../../../../../DynamicTable/Tbody";
import dayjs from "dayjs";
import WCTableRow from "./WCTableRow";
import { WCTableRowLabels } from "../../../../../libs/types/constant";
import { createAllRowData } from "../../../../../libs/hooks/hooks";

const WCTableBody = () => {
  const today = {
    date: dayjs().date(),
    month: dayjs().month(),
    year: dayjs().year(),
  };
  const years = [today.year, today.year + 1, today.year + 2, today.year + 3];
  createAllRowData(years);
  return (
    <Tbody>
      <p></p>
    </Tbody>
  );
};

export default WCTableBody;
