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

const quarters = {
  q1: [1, 2, 3],
  q2: [4, 5, 6],
  q3: [7, 8, 9],
  q10: [10, 11, 12]
}

export const WCYearDetail = [
  {
    quarter: 1,
    months: [
      {
        value: 1,
        month: "January"
      },
      {
        value: 2,
        month: "February"
      },
      {
        value: 3,
        month: "March"
      }
    ],
    season: 'Winter'
  },
  {
    quarter: 2,
    months: [
      {
        value: 4,
        month: "April"
      },
      {
        value: 5,
        month: "May"
      },
      {
        value: 6,
        month: "June"
      }
    ],
    season: 'Summer'
  },
  {
    quarter: 3,
    months: [
      {
        value: 7,
        month: "July"
      },
      {
        value: 8,
        month: "August"
      },
      {
        value: 9,
        month: "September"
      }
    ],
    season: 'Summer'
  },
  {
    quarter: 4,
    months: [
      {
        value: 10,
        month: "October"
      },
      {
        value: 11,
        month: "November"
      },
      {
        value: 12,
        month: "December"
      }
    ],
    season: 'Winter'
  }
]