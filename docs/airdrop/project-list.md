---
sidebar_position: 1
---

# 项目交互列表

**排名不分先后**

export const Table = ({ data }) => { // 使用解构赋值来接受参数对象 data
  return (
    <table>
      <thead>
        <tr>
          <th style={{ width: "10%" }}>项目名称</th>
          <th style={{ width: "40%" }}>融资背景</th>
          <th style={{ width: "30%" }}>推特链接</th>
          <th style={{ width: "10%" }}>教程</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>
              <a href={item.financingLink} target="_blank" rel="noopener noreferrer">
                {item.projectName}
              </a>
            </td>
            <td>
              {item.financingBackground.split('\n').map((line, idx) => (
                <React.Fragment key={idx}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </td>
            <td>
              <a href={item.twitterLink} target="_blank" rel="noopener noreferrer">
                {item.twitterLink}
              </a>
            </td>
            <td>
              <a href={item.tutorialLink} target="_self" rel="noopener noreferrer">
                ➡
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

## L1

export const L1data = [
  {
    projectName: "DarkFi",
    financingLink: "https://www.rootdata.com/zh/Projects/detail/DarkFi?k=MjgwNw%3D%3D",
    financingBackground: "隐私L1\nalameda research投了",
    twitterLink: "https://twitter.com/darkfisquad",
    tutorialLink: "",
  },
  {
    projectName: "burnt",
    financingLink: "https://www.rootdata.com/zh/Projects/detail/Burnt?k=MjYyMg%3D%3D",
    financingBackground: "2021-05-06 种子轮300w 做NFT拍卖协议Burnt Finance\n2022-01-17 A轮800w\n2023-03-22 更名为Burnt\n2023-10-06 获得Circle Ventures战略投资，金额未披露",
    twitterLink: "https://twitter.com/burnt_xion",
    tutorialLink: "",
  },
];

<Table data={L1data} />

## L2

export const L2data = [
  {
    projectName: "zksync",
    financingLink: "https://www.rootdata.com/zh/Projects/detail/zkSync%20-%20Matter%20Labs?k=Mjc0Mg%3D%3D",
    financingBackground: "种子轮200w\nA轮600w\nB轮5000w\nC轮2亿\n合计2.58亿",
    twitterLink: "https://twitter.com/zksync",
    tutorialLink: "",
  },
  {
    projectName: "starknet",
    financingLink: "https://www.rootdata.com/zh/Projects/detail/StarkNet?k=Mjc1MQ%3D%3D",
    financingBackground: "种子轮600w\n以太坊基金会投了1200万\nA轮3000w\nB轮7500w\nC轮5000万\nD轮1亿\nAlameda Research投了950万\n合计2.825亿",
    twitterLink: "https://twitter.com/Starknet",
    tutorialLink: "",
  },
  {
    projectName: "scroll",
    financingLink: "https://www.rootdata.com/zh/Projects/detail/Scroll?k=Mjc0Mw%3D%3D",
    financingBackground: "A轮3000w\n第二轮5000w\n合计0.8亿",
    twitterLink: "https://twitter.com/Scroll_ZKP",
    tutorialLink: "",
  },
  {
    projectName: "linea",
    financingLink: "https://www.rootdata.com/zh/Projects/detail/Linea?k=NjAyMg%3D%3D",
    financingBackground: "ConsenSys（小狐狸母公司）开发",
    twitterLink: "https://twitter.com/LineaBuild",
    tutorialLink: "",
  },
  {
    projectName: "base",
    financingLink: "https://www.rootdata.com/zh/Projects/detail/Base?k=NzA1Ng%3D%3D",
    financingBackground: "coinbase开发",
    twitterLink: "https://twitter.com/BuildOnBase",
    tutorialLink: "",
  },
  {
    projectName: "zklink",
    financingLink: "https://www.rootdata.com/zh/Projects/detail/zkLink?k=Mjc0MQ%3D%3D",
    financingBackground: "2021-10-23 850w\n2023-5-4 1000w",
    twitterLink: "https://twitter.com/zkLink_Official",
    tutorialLink: "",
  },
];

<Table data={L2data} />

## DEFI

export const defidata = [
  {
    projectName: "Elixir",
    financingLink: "https://www.rootdata.com/zh/Projects/detail/Elixir?k=NTUwMg%3D%3D",
    financingBackground: "2023-01-17 种子轮210w\n2023-10-18 A轮750w",
    twitterLink: "https://twitter.com/ElixirProtocol",
    tutorialLink: "",
  },
  {
    projectName: "brine finance",
    financingLink: "https://www.rootdata.com/zh/Projects/detail/Brine%20Finance?k=NzQ0Ng%3D%3D",
    financingBackground: "2023-09-07 1650w",
    twitterLink: "https://twitter.com/brinefinance",
    tutorialLink: "",
  },
];

<Table data={defidata} />

## 链上合约

export const onchainPerpetualData = [
  {
    projectName: "Avantis",
    financingLink: "https://www.rootdata.com/zh/Projects/detail/Avantis?k=OTIyMg%3D%3D",
    financingBackground: "2023-09-26 种子轮400w\n入选过base生态基金投资的6个项目\n投资方包括pantera capital、founders fund和base ecosystem fund，和小牛的投资机构是同一批人",
    twitterLink: "https://twitter.com/avantisfinance",
    tutorialLink: "",
  },
  {
    projectName: "Satori",
    financingLink: "https://www.rootdata.com/zh/Projects/detail/Satori?k=MzAyMg%3D%3D",
    financingBackground: "2022-5-13融了1000w",
    twitterLink: "https://twitter.com/SatoriFinance",
    tutorialLink: "",
  },
  {
    projectName: "aevo",
    financingLink: "https://www.rootdata.com/zh/Projects/detail/Aevo?k=MzAwOQ%3D%3D",
    financingBackground: "2022-03-22 B轮875w\nparadigm/dragonfly/coinbase投资",
    twitterLink: "https://twitter.com/aevoxyz",
    tutorialLink: "",
  },
  {
    projectName: "GRVT",
    financingLink: "https://www.rootdata.com/zh/Projects/detail/GRVT?k=NzY4Mg%3D%3D",
    financingBackground: "2022-10-1 pre种子轮210w\n2023-9-11 种子轮500w",
    twitterLink: "https://twitter.com/grvt_io",
    tutorialLink: "",
  },
  {
    projectName: "Paradex",
    financingLink: "https://www.rootdata.com/zh/Projects/detail/Paradex?k=ODY2NA%3D%3D",
    financingBackground: "paradigm孵化（不是机构paradigm，一个token场外大宗交易平台）",
    twitterLink: "https://twitter.com/tradeparadex",
    tutorialLink: "",
  },
  {
    projectName: "ZKX（已发币）",
    financingLink: "https://www.rootdata.com/zh/Projects/detail/ZKX?k=MzAzMA%3D%3D",
    financingBackground: "2022-7-14 种子轮450w",
    twitterLink: "https://twitter.com/zkxprotocol",
    tutorialLink: "",
  },
  {
    projectName: "SubstanceX",
    financingLink: "https://www.rootdata.com/zh/Projects/detail/SubstanceX?k=ODcyNg%3D%3D",
    financingBackground: "LD Capital/AVALANCHE co-founder投资",
    twitterLink: "https://twitter.com/SubstanceX_",
    tutorialLink: "",
  },
  {
    projectName: "Perennial",
    financingLink: "https://www.rootdata.com/zh/Projects/detail/Perennial?k=NTg3OQ%3D%3D",
    financingBackground: "2022-12-7 种子轮1200w",
    twitterLink: "https://twitter.com/perenniallabs",
    tutorialLink: "",
  },
];

<Table data={onchainPerpetualData} />

## Raas

export const raasData = [
  {
    projectName: "altlayer",
    financingLink: "https://www.rootdata.com/zh/Projects/detail/AltLayer?k=MjczNg%3D%3D",
    financingBackground: "2022-7-1 种子轮720w\n入选币安实验室最有价值建设者 (MVB) 计划第六季中的四个表现最佳的项目",
    twitterLink: "https://twitter.com/alt_layer",
    tutorialLink: "",
  },
  {
    projectName: "opside",
    financingLink: "https://www.rootdata.com/zh/Projects/detail/Opside?k=NTkxMQ%3D%3D",
    financingBackground: "2023-4-6 种子轮400w",
    twitterLink: "https://twitter.com/SatoriFinance",
    tutorialLink: "",
  },
    {
    projectName: "conduit",
    financingLink: "https://www.rootdata.com/zh/Projects/detail/Conduit?k=NzQzNQ%3D%3D",
    financingBackground: "2023-3-28 种子轮700w\nparadigm投资",
    twitterLink: "https://twitter.com/conduitxyz",
    tutorialLink: "",
  },
];

<Table data={raasData} />

## 模块化区块链

export const moduleData = [
  {
    projectName: "celestia（已发币）",
    financingLink: "https://www.rootdata.com/zh/Projects/detail/Celestia?k=MTk4NA%3D%3D",
    financingBackground: "2021-3-4 种子轮150w\n2022-10-20 5500w",
    twitterLink: "https://twitter.com/CelestiaOrg",
    tutorialLink: "",
  },
  {
    projectName: "Astria",
    financingLink: "https://www.rootdata.com/zh/Projects/detail/Astria?k=NzUyMA%3D%3D",
    financingBackground: "2023-4-4 种子轮550w",
    twitterLink: "https://twitter.com/AstriaOrg",
    tutorialLink: "",
  },
    {
    projectName: "fuel",
    financingLink: "https://www.rootdata.com/zh/Projects/detail/Fuel?k=MjI3OA%3D%3D",
    financingBackground: "2021-9-21 种子轮150w\n2022-9-6 8000w",
    twitterLink: "https://twitter.com/fuel_network",
    tutorialLink: "",
  },
  {
    projectName: "eclipse",
    financingLink: "https://www.rootdata.com/zh/Projects/detail/Eclipse?k=MTk4Mw%3D%3D",
    financingBackground: "2022-8-1 pre种子轮600w\n2022-9-27 种子轮900w",
    twitterLink: "https://twitter.com/EclipseFND",
    tutorialLink: "",
  },
  {
    projectName: "Caldera",
    financingLink: "https://www.rootdata.com/zh/Projects/detail/Caldera?k=Njg4Mg%3D%3D",
    financingBackground: "2023-2-13 900w",
    twitterLink: "https://twitter.com/Calderaxyz",
    tutorialLink: "",
  },
  {
    projectName: "Avail",
    financingLink: "https://www.rootdata.com/zh/Projects/detail/Avail?k=NDQ0Mg%3D%3D",
    financingBackground: "",
    twitterLink: "https://twitter.com/AvailProject",
    tutorialLink: "",
  },
  {
    projectName: "Espresso Systems",
    financingLink: "https://www.rootdata.com/zh/Projects/detail/Espresso%20Systems?k=Mjc2NQ%3D%3D",
    financingBackground: "2022-3-7 种子轮3200w",
    twitterLink: "https://twitter.com/EspressoSys",
    tutorialLink: "",
  },
  {
    projectName: "dymension",
    financingLink: "https://www.rootdata.com/zh/Projects/detail/dYmension?k=MjA5Nw%3D%3D",
    financingBackground: "2023-2-9 种子轮670w",
    twitterLink: "https://twitter.com/dymension",
    tutorialLink: "",
  },
  {
    projectName: "Nautilus Chain",
    financingLink: "https://www.rootdata.com/zh/Projects/detail/Nautilus%20Chain?k=NzQ3OA%3D%3D",
    financingBackground: "前身是 Zebec Chain",
    twitterLink: "https://twitter.com/nautilus_chain",
    tutorialLink: "",
  },
  {
    projectName: "Sovereign",
    financingLink: "https://www.rootdata.com/zh/Projects/detail/Sovereign?k=NjY3Mw%3D%3D",
    financingBackground: "2023-1-30 种子轮739w",
    twitterLink: "https://twitter.com/sovereign_labs",
    tutorialLink: "",
  },
  {
    projectName: "Artela",
    financingLink: "https://www.rootdata.com/zh/Projects/detail/Artela?k=NzkzNA%3D%3D",
    financingBackground: "2023-7-12 种子轮600w",
    twitterLink: "https://twitter.com/Artela_Network",
    tutorialLink: "",
  },
  {
    projectName: "Movement Labs",
    financingLink: "https://www.rootdata.com/zh/Projects/detail/Movement%20Labs?k=OTMxMg%3D%3D",
    financingBackground: "2023-9-13 pre种子轮340w",
    twitterLink: "https://twitter.com/movementlabsxyz",
    tutorialLink: "",
  },
];

<Table data={moduleData} />

## 隐私

export const privacyData = [
  {
    projectName: "Nocturne",
    financingLink: "https://www.rootdata.com/zh/Projects/detail/Nocturne?k=ODY2NQ%3D%3D",
    financingBackground: "2023-10-25 种子轮600w，V神参投",
    twitterLink: "https://twitter.com/nocturne_xyz",
    tutorialLink: "",
  },
  {
    projectName: "Renegade",
    financingLink: "https://www.rootdata.com/zh/Projects/detail/Renegade?k=Njk5NA%3D%3D",
    financingBackground: "2023-02-20 种子轮340万美元",
    twitterLink: "https://twitter.com/renegade_fi",
    tutorialLink: "",
  },
  {
    projectName: "Tristero",
    financingLink: "https://www.rootdata.com/zh/Projects/detail/Tristero?k=NzkzMw%3D%3D",
    financingBackground: "2023-05-02 种子轮480w",
    twitterLink: "https://twitter.com/0xtristero",
    tutorialLink: "",
  },
];

<Table data={privacyData} />

## Binance Labs 第六季孵化项目

export const BinanceLabsIncubationSeason6Data = [
  {
    projectName: "Vistara",
    financingLink: "https://www.rootdata.com/zh/Projects/detail/Vistara?k=ODk1Nw%3D%3D",
    financingBackground: "",
    twitterLink: "https://twitter.com/vistaralabs",
    tutorialLink: "",
  },
  {
    projectName: "UXUY",
    financingLink: "https://www.rootdata.com/zh/Projects/detail/UXUY?k=NzU4OQ%3D%3D",
    financingBackground: "2023-4-11 种子轮320w",
    twitterLink: "https://twitter.com/uxuycom",
    tutorialLink: "",
  },
    {
    projectName: "BBOX",
    financingLink: "https://www.rootdata.com/zh/Projects/detail/BBOX?k=OTUwMg%3D%3D",
    financingBackground: "",
    twitterLink: "https://twitter.com/bboexchange",
    tutorialLink: "",
  },
  {
    projectName: "Derivio",
    financingLink: "https://www.rootdata.com/zh/Projects/detail/Derivio?k=NzQ4MQ%3D%3D",
    financingBackground: "",
    twitterLink: "https://twitter.com/derivio_xyz",
    tutorialLink: "",
  },
  {
    projectName: "Ethena Labs",
    financingLink: "https://www.rootdata.com/zh/Projects/detail/Ethena?k=ODU4Mw%3D%3D",
    financingBackground: "2023-7-17 种子轮650w",
    twitterLink: "https://twitter.com/ethena_labs",
    tutorialLink: "",
  },
  {
    projectName: "Shogun",
    financingLink: "https://www.rootdata.com/zh/Projects/detail/Shogun?k=OTUwMQ%3D%3D",
    financingBackground: "",
    twitterLink: "https://twitter.com/shogunfi",
    tutorialLink: "",
  },
  {
    projectName: "MyShell",
    financingLink: "https://www.rootdata.com/zh/Projects/detail/MyShell?k=NzMwNw%3D%3D",
    financingBackground: "",
    twitterLink: "https://twitter.com/myshell_ai",
    tutorialLink: "",
  },
  {
    projectName: "NFP",
    financingLink: "https://www.rootdata.com/zh/Projects/detail/NFPrompt?k=Nzk5Mw%3D%3D",
    financingBackground: "2023-06-07 种子轮金额未披露",
    twitterLink: "https://twitter.com/nfprompt",
    tutorialLink: "",
  },
  {
    projectName: "QnA3.A",
    financingLink: "https://www.rootdata.com/zh/Projects/detail/QnA3.AI?k=ODY5MQ%3D%3D",
    financingBackground: "",
    twitterLink: "https://twitter.com/qnaweb3",
    tutorialLink: "",
  },
  {
    projectName: "Cellula",
    financingLink: "https://www.rootdata.com/zh/Projects/detail/Cellula?k=OTUwMw%3D%3D",
    financingBackground: "",
    twitterLink: "https://twitter.com/cellulalifegame",
    tutorialLink: "",
  },
  {
    projectName: "Crypto Cafe",
    financingLink: "https://www.rootdata.com/zh/Projects/detail/Crypto%20Cafe?k=OTUwNA%3D%3D",
    financingBackground: "",
    twitterLink: "https://twitter.com/cryptocafeio",
    tutorialLink: "",
  },
  {
    projectName: "MetaCene",
    financingLink: "https://www.rootdata.com/zh/Projects/detail/MetaCene?k=ODU3NQ%3D%3D",
    financingBackground: "2023-07-14 种子轮500w",
    twitterLink: "https://twitter.com/MetaCeneGame",
    tutorialLink: "",
  },
];

<Table data={BinanceLabsIncubationSeason6Data} />

## Binance Lab MVB VI

export const BinanceLabMVBVIData = [
  {
    projectName: "altlayer",
    financingLink: "https://www.rootdata.com/zh/Projects/detail/AltLayer?k=MjczNg%3D%3D",
    financingBackground: "2022-7-1 种子轮720w\n入选币安实验室最有价值建设者 (MVB) 计划第六季中的四个表现最佳的项目",
    twitterLink: "https://twitter.com/alt_layer",
    tutorialLink: "",
  },
  {
    projectName: "KiloEx",
    financingLink: "https://www.rootdata.com/zh/Projects/detail/KiloEx?k=NzY1Mg%3D%3D",
    financingBackground: "",
    twitterLink: "https://twitter.com/KiloEx_perp",
    tutorialLink: "",
  },
  {
    projectName: "Kinza Finance",
    financingLink: "https://www.rootdata.com/zh/Projects/detail/Kinza?k=NzY1MQ%3D%3D",
    financingBackground: "",
    twitterLink: "https://twitter.com/kinzafinance",
    tutorialLink: "",
  },
  {
    projectName: "Sleepless AI",
    financingLink: "https://www.rootdata.com/zh/Projects/detail/Sleepless%20AI?k=NzY1NA%3D%3D",
    financingBackground: "",
    twitterLink: "https://twitter.com/sleeplessai_lab",
    tutorialLink: "",
  },
];

<Table data={BinanceLabMVBVIData} />