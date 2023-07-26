import {
  OptionProperties,
  OptionType,
} from "@pantheon-tech/bsm-optionmodel";
import {
  CallPutConstantType,
  NodeType,
} from "./GeneralTypes";
import moment from "moment";
import dayjs from "dayjs";

export const CallPutConstants: OptionType[] = [
  OptionType.CALL,
  OptionType.PUT,
];
export const NodeConstant: NodeType = "OTA" || "BEN";

export const EmptyDataRow: OptionProperties = {
  daysToExpiry: 0,
  yearsToExpiry: 0,
  optionPrice: 0,
  greeks: {
    P: {
      price: 0,
      delta: 0,
      gamma: 0,
      theta: 0,
      vega: 0,
      rho: 0,
    },
    C: {
      price: 0,
      delta: 0,
      gamma: 0,
      theta: 0,
      vega: 0,
      rho: 0,
    },
  },
  optionType: OptionType.PUT,
  underlyingPrice: 0,
  strikePrice: 0,
  expiryDate: dayjs().format("YYYY-MM-DD"),
  riskFreeRate: 0,
  dividendYield: 0,
  impliedVolatility: 0,
};

export const timePickerOptions = ["Date", "Week", "Month", "Quarter", "Year"];