import fetch from "isomorphic-fetch";
import styled from "styled-components";
import { useWallet } from "use-wallet";
import SwapUI from "../components/swap";

const fetcher = (url) => fetch(url).then((r) => r.json());

const Swap = ({ tokenList }) => {
  let selectList = Object.assign(
    [],
    tokenList.tokens.map((item) => {
      return { value: item.address, label: item.symbol, d: item.decimals };
    })
  );
  selectList.push({
    value: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
    label: "ETH",
    d: 18,
  });

  return (
    <>
      <SwapUI tokens={alphaSort(selectList)} />
    </>
  );
};

const alphaSort = (data) => {
  return data.sort((a, b) => {
    if (a.label < b.label) {
      return -1;
    }
    if (a.label > b.label) {
      return 1;
    }
    return 0;
  });
};

export default Swap;

export async function getServerSideProps() {
  const data = await fetcher("http://tokens.1inch.eth.link/");
  return { props: { tokenList: data } };
}
