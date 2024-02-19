---
sidebar_position: 1
slug: zksync-project-list
title: zksync项目交互列表——按TVL排序
tags: [airdrop,zksync,ecosystem]
---

给大家整理了一下zksync上可以交互的dapp，丰富自己的合约数量

export const Table = ({ data }) => { // 使用解构赋值来接受参数对象 data
  return (
    <table>
      <thead>
        <tr>
          <th style={{ width: "10%" }}>项目名称</th>
          <th style={{ width: "40%" }}>推特链接</th>
          <th style={{ width: "50%" }}>官网</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>
                {item.projectName}
            </td>
            <td>
              <a href={item.twitterLink} target="_blank" rel="noopener noreferrer">
                {item.twitterLink}
              </a>
            </td>
            <td>
              <a href={item.websiteLink} target="_self" rel="noopener noreferrer">
                {item.websiteLink}
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

## dex

export const dexdata = [
  {
    projectName: "syncswap",
    twitterLink: "https://twitter.com/syncswap",
    websiteLink: "https://syncswap.xyz/",
  },
  {
    projectName: "mute",
    twitterLink: "https://twitter.com/mute_io",
    websiteLink: "https://mute.io/",
  },
  {
    projectName: "zkswap finance",
    twitterLink: "https://twitter.com/zkSwap_finance",
    websiteLink: "https://zkswap.finance/",
  },
  {
    projectName: "velocore",
    twitterLink: "https://twitter.com/velocorexyz",
    websiteLink: "https://velocore.xyz/",
  },
  {
    projectName: "Maverick Protocol",
    twitterLink: "https://twitter.com/mavprotocol",
    websiteLink: "https://www.mav.xyz/",
  },
  {
    projectName: "spacefi",
    twitterLink: "https://twitter.com/spacefi_io",
    websiteLink: "https://swap-zksync.spacefi.io/#/swap",
  },
  {
    projectName: "izumi",
    twitterLink: "https://twitter.com/izumi_Finance",
    websiteLink: "https://izumi.finance/home",
  },
  {
    projectName: "pancake",
    twitterLink: "https://twitter.com/PancakeSwap",
    websiteLink: "https://pancakeswap.finance/",
  },
  {
    projectName: "WOOFi Swap",
    twitterLink: "https://twitter.com/_WOOFi",
    websiteLink: "https://fi.woo.org/",
  },
  {
    projectName: "eZKalibur",
    twitterLink: "https://twitter.com/zkaliburDEX",
    websiteLink: "https://dapp.ezkalibur.com/",
  },
  {
    projectName: "vesync",
    twitterLink: "https://twitter.com/veSyncL2",
    websiteLink: "https://app.vesync.finance/swap",
  },
];

<Table data={dexdata} />

## lending

export const lendingdata = [
  {
    projectName: "zerolend",
    twitterLink: "https://twitter.com/zerolendxyz",
    websiteLink: "https://app.zerolend.xyz/",
  },
  {
    projectName: "ReactorFusion",
    twitterLink: "https://twitter.com/ReactorFusionR",
    websiteLink: "https://reactorfusion.xyz/",
  },
  {
    projectName: "eralend",
    twitterLink: "https://twitter.com/Era_Lend",
    websiteLink: "https://app.eralend.com/",
  },
  {
    projectName: "xBank Finance",
    twitterLink: "https://twitter.com/xBankFinance",
    websiteLink: "https://app.xbank.finance/",
  }
];

<Table data={lendingdata} />

## Derivatives

export const Derivativesdata = [
  {
    projectName: "Derivio",
    twitterLink: "https://twitter.com/derivio_xyz",
    websiteLink: "https://derivio.xyz/",
  },
  {
    projectName: "Holdstation",
    twitterLink: "https://twitter.com/HoldstationW",
    websiteLink: "https://holdstation.com/",
  },
  {
    projectName: "Satori",
    twitterLink: "https://twitter.com/SatoriFinance",
    websiteLink: "https://satori.finance/",
  },
  {
    projectName: "Fulcrom",
    twitterLink: "https://twitter.com/FulcromFinance",
    websiteLink: "https://fulcrom.finance/",
  }
];

<Table data={Derivativesdata} />