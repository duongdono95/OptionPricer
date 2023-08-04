import dayjs, { Dayjs } from "dayjs";
import weekOfYear from "dayjs/plugin/weekOfYear";
import { RangeValue } from "rc-picker/lib/interface";
import { OPTimePickerOptionsType } from "../types/GeneralTypes";

dayjs.extend(weekOfYear);

export const numDataConverter = (data: number | undefined) => {
  if (typeof data === "number") {
    const formattedData = Number(data.toFixed(3));
    return formattedData;
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
