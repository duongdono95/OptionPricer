import dayjs, { Dayjs } from "dayjs";
import weekOfYear from "dayjs/plugin/weekOfYear";
import { RangeValue } from "rc-picker/lib/interface";
import { OPTimePickerOptionsType } from "../types/GeneralTypes";
import { WCTableRowLabels } from "../types/constant";

dayjs.extend(weekOfYear);

export const numDataConverter = (data: number | undefined) => {
  if (typeof data === "number") {
    const formattedData = Number(data.toFixed(3));
    return formattedData;
  }
};

export const shortenString = (content: string, count?: number) => {
  const convertedContent = content.charAt(0).toUpperCase() + content.slice(1);
  if (count) {
    return convertedContent.slice(0, count);
  } else {
    return convertedContent.slice(0, 3);
  }
};

export const calculateTimeDifference = (
  values: RangeValue<Dayjs>,
  rangeType: OPTimePickerOptionsType
) => {
  console.log(rangeType);
  const difference = null;
  if (values && values[0] && values[1]) {
    let difference = values[1].diff(
      values[0],
      rangeType === "date" ? "day" : rangeType
    );
    return difference;
  }
  return difference;
};

export const addYearToArr = (year: number) => {
  return WCTableRowLabels.map((item) => ({ ...item, year }));
};

export const createAllRowData = (years: number[]) => {
  const allData: {
    name: string;
    quarter: string;
    season: string;
  }[] = [];
  const data = years.forEach((year) => console.log(year));
  //  [...allData, ...addYearToArr(year)]);
};
