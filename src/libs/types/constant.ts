import {
  OptionProperties,
  OptionType,
} from "@pantheon-tech/bsm-optionmodel";
import {
  NodeType,
  OPTimePickerOptionsType,
} from "./GeneralTypes";
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

export const OPTimePickerOptions:OPTimePickerOptionsType[] =  ["date" , "week" , "month" , "quarter" , "year"];

const monthLabels = [
  'January',
  'February',
  'March',
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
]

const quarterLabels = [
  1, 2, 3, 4
]

const seasonLabels  = [
  'Summer',
  'Winter'
]

export const WCTableRowLabels = [
  {
    name: monthLabels[0],
    quarter: quarterLabels[0],
    season: seasonLabels[0]
  },
  {
    name: monthLabels[1],
    quarter: quarterLabels[0],
    season: seasonLabels[0]
  },
  {
    name: monthLabels[2],
    quarter: quarterLabels[0],
    season: seasonLabels[0]
  },
  {
    name: monthLabels[3],
    quarter: quarterLabels[1],
    season: seasonLabels[1]
  },
  {
    name: monthLabels[4],
    quarter: quarterLabels[1],
    season: seasonLabels[1]
  },
  {
    name: monthLabels[5],
    quarter: quarterLabels[1],
    season: seasonLabels[1]
  },
  {
    name: monthLabels[6],
    quarter: quarterLabels[2],
    season: seasonLabels[1]
  },
  {
    name: monthLabels[7],
    quarter: quarterLabels[2],
    season: seasonLabels[1]
  },
  {
    name: monthLabels[8],
    quarter: quarterLabels[2],
    season: seasonLabels[1]
  },
  {
    name: monthLabels[9],
    quarter: quarterLabels[3],
    season: seasonLabels[0]
  },
  {
    name: monthLabels[10],
    quarter: quarterLabels[3],
    season: seasonLabels[0]
  },
  {
    name: monthLabels[11],
    quarter: quarterLabels[3],
    season: seasonLabels[0]
  },
]