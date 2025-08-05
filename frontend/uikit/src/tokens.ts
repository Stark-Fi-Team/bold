import tokenBold from "./token-icons/bold.svg";
import tokenEth from "./token-icons/eth.svg";
import tokenLqty from "./token-icons/lqty.svg";
import tokenLusd from "./token-icons/lusd.svg";
import tokenReth from "./token-icons/reth.svg";
import tokenSbold from "./token-icons/sbold.svg";
import tokenSteth from "./token-icons/wsteth.svg";

// any external token, without a known symbol
export type ExternalToken = {
  icon: string;
  name: string;
  symbol: string;
};

// a token with a known symbol (TokenSymbol)
export type Token = ExternalToken & {
  icon: string;
  name: string;
  symbol: TokenSymbol;
};

export type TokenSymbol =
  | "BOLD"
  | "TCENT"
  | "LQTY"
  | "LUSD"
  | "WETH"
  | "SBOLD"
  | "WCENT";

export type CollateralSymbol =
  & TokenSymbol
  & (
    | "TCENT"
    | "WETH"
    | "WCENT"
  );

export function isTokenSymbol(symbolOrUrl: string): symbolOrUrl is TokenSymbol {
  return (
    symbolOrUrl === "BOLD"
    || symbolOrUrl === "TCENT"
    || symbolOrUrl === "LQTY"
    || symbolOrUrl === "LUSD"
    || symbolOrUrl === "WETH"
    || symbolOrUrl === "SBOLD"
    || symbolOrUrl === "WCENT"
  );
}

export function isCollateralSymbol(symbol: string): symbol is CollateralSymbol {
  return (
    symbol === "TCENT"
    || symbol === "WETH"
    || symbol === "WCENT"
  );
}

export type CollateralToken = Token & {
  collateralRatio: number;
  symbol: CollateralSymbol;
};

export const LUSD: Token = {
  icon: tokenLusd,
  name: "LUSD",
  symbol: "LUSD" as const,
} as const;

export const BOLD: Token = {
  icon: tokenBold,
  name: "BOLD",
  symbol: "BOLD" as const,
} as const;

export const LQTY: Token = {
  icon: tokenLqty,
  name: "LQTY",
  symbol: "LQTY" as const,
} as const;

export const SBOLD: Token = {
  icon: tokenSbold,
  name: "sBOLD",
  symbol: "SBOLD" as const,
} as const;

export const TCENT: CollateralToken = {
  collateralRatio: 1.1,
  icon: tokenEth,
  name: "TCENT",
  symbol: "TCENT" as const,
} as const;

export const WETH: CollateralToken = {
  collateralRatio: 1.2,
  icon: tokenReth,
  name: "wETH",
  symbol: "WETH" as const,
} as const;

export const WCENT: CollateralToken = {
  collateralRatio: 1.2,
  icon: tokenSteth,
  name: "WCENT",
  symbol: "WCENT" as const,
} as const;

export const COLLATERALS: CollateralToken[] = [
  TCENT,
  WETH,
  WCENT,
];

export const TOKENS_BY_SYMBOL = {
  BOLD,
  TCENT,
  LQTY,
  LUSD,
  WETH,
  SBOLD,
  WCENT,
} as const;
