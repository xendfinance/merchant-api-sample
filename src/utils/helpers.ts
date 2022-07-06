import Web3 from "web3";
import slugify from "slugify";

export const setupWeb3 = (network: "bsc-test" | "bsc" | "eth" | "polygon") => {
  let provider = "";
  if (network === "bsc-test") {
    provider = "https://data-seed-prebsc-1-s1.binance.org:8545/";
  }
  if (network === "bsc") {
    provider = "https://bsc-dataseed1.ninicoin.io";
  }
  if (network === "eth") {
    provider = "https://mainnet.infura.io/v3/c9a2fe300dd9496f9ee19bc4cb2c4689";
  }
  return new Web3(provider);
};

export const encodeBase64 = (text: string) => {
  let x = Buffer.from(text).toString("base64");
  return x;
};

export const decodeBase64 = (text: string) => {
  let x = Buffer.from(text, "base64").toString("ascii");
  return x;
};

export const calcGasInUSD = async (
  txnHash: string,
  network: "bsc-test" | "bsc"
) => {
  try {
    let tx = await setupWeb3(network).eth.getTransaction(txnHash);
    if (!tx) throw "didnot get transaction";
  } catch (e) {
    return null;
  }
};

export const explorerBaseUrl = () => {
  let env = process.env.ENV;
  switch (env) {
    case "production":
      return "https://bscscan.com/tx/";

    case "staging":
      return "https://testnet.bscscan.com/tx/";

    default:
      return "https://bscscan.com/tx/";
  }
};

export const appBaseUri = () => {
  let env = process.env.ENV;
  switch (env) {
    case "development":
      return "http://localhost:" + process.env.PORT + "/v1";

    case "staging":
      return "https://nativeapistaging.xend.finance/v1";

    case "production":
      return "https://mobileapi.xend.finance/v1";
    default:
      return "https://nativeapistaging.xend.finance/v1";
  }
};

/**
 * @description returns slugified word
 * @param {1}: string
 */
export const slugIt = (word) =>
  slugify(word, {
    replacement: "_",
    lower: true,
  });

/**
 * @description Capitalize first letter
 * @param {1}: string
 */
export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

/**
 * @description: Return formated metadata
 * @param:
 */
export const formatMetaData = (
  count: number,
  limit: number,
  currentPage: number,
  data
) => ({
  totalRecords: count,
  pageSize: limit,
  currentPage,
  totalPage: Math.ceil(count / limit),
  records: data,
});

/**
 * @description: Paginate data
 * @param:
 */
export const pagination = (curPage, perPage) => {
  // pagination
  const page = parseInt(curPage, 10) || 1;

  // page size should not be more than 20 records
  let pageSize = parseInt(perPage, 10) <= 20 ? parseInt(perPage, 10) : 20;
  const limit = pageSize || 10;

  const offset = (page - 1) * limit;

  return { page, limit, offset };
};

/**
 * @description: Generate random 8 letter word
 * @param:
 */
export const randomString = () => {
  return Math.random().toString(36).slice(-8);
};
