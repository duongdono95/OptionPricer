export type TradingRole = "Buy" | "Sell";
export type CallPutConstantType = "C" | "P";
export type InputComponentType = "text" | "number" | "date";
export type NodeType = "OTA" | "BEN";

export type OPTimePickerOptionsType = "date" | "week" | "month" | "quarter" | "year"

export type monthArrDifferentYears = {
  year: number;
  months: number[];
}[]
export type selectedMonthsArr = monthArrDifferentYears | undefined