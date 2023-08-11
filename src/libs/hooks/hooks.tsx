import dayjs, { Dayjs } from "dayjs";
import weekOfYear from "dayjs/plugin/weekOfYear";
import { RangeValue } from "rc-picker/lib/interface";
import { OPTimePickerOptionsType } from "../types/GeneralTypes";
import { WCYearDetail } from "../types/constant";

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
  return WCYearDetail.map((item) => ({ ...item, year }));
};

export const createSelectedMonthArr = (start: Dayjs, end: Dayjs) => {
  const startMonth = start && start.month() + 1;
  const startYear = start && start.year();
  const endMonth = end && end.month() + 1;
  const endYear = end && end.year();
  const result = [];
  if (startYear === endYear) {
    for (let i = startMonth; i <= endMonth; i++) {
      result.push(i);
    }
    return result;
  }
  if (startYear < endYear) {
    for (let year = startYear; year <= endYear; year++) {
      let monthsForYear = [];

      // find the start and end months for the looped year
      const monthStart = year === startYear ? startMonth : 1;
      const monthEnd = year === endYear ? endMonth : 12;

      for (let month = monthStart; month <= monthEnd; month++) {
        monthsForYear.push(month);
      }

      result.push({
        year: year,
        months: monthsForYear,
      });
    }
    return result;
  }
};
