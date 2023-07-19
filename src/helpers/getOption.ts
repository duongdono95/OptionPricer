import { OptionType } from "@pantheon-tech/bsm-optionmodel";
import { useEffect } from "react";
import { useOptionModel } from "../components/useOptionModel";

export const GetOption = () => {
  const X = 50;
  const K = 50;
  const plusOneYear = new Date().setFullYear(
    new Date().getFullYear() + 1
  );
  const lessOneDay = new Date(plusOneYear).setDate(
    new Date(plusOneYear).getDate() - 1
  );
  const d = new Date(lessOneDay);
  const t = new Date(d).toISOString().split("T")[0];
  const r = 0.01;
  const q = 0.01;
  const s = 0.2;
  const type = OptionType.PUT;

  const [setProp, optionProps] = useOptionModel({
    optionType: type,
    underlyingPrice: X,
    strikePrice: K,
    expiryDate: "2023-12-31",
    riskFreeRate: 0,
    dividendYield: 0,
    impliedVolatility: s,
  });
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setProp(
  //       "impliedVolatility",
  //       Math.random() * (1 - 0.01) + 0.01
  //     );
  //   }, 50000);
  //   return () => void clearInterval(timer);
  // }, []);
  return optionProps;
};
