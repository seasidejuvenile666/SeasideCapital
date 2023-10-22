---
sidebar_position: 4
---

# 机构主要成员名单

H/T [阿伟](https://twitter.com/Siegfried90210/status/1680600086709977088)

export const Table = ({ data }) => { // 使用解构赋值来接受参数对象 data
  return (
    <table>
      <thead>
        <tr>
          <th>职位</th>
          <th>推特链接</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>
                {item.name}
            </td>
            <td>
              {item.twitterLink.split('\n').map((line, idx) => (
                <React.Fragment key={idx}>
                  <a href={line} target="_blank" rel="noopener noreferrer">
                    {line}
                  </a>
                  <br />
                </React.Fragment>
              ))}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

## [Paradigm](https://twitter.com/paradigm)

export const Paradigmdata = [
  {
    name: "Co-Founder",
    twitterLink: "https://twitter.com/matthuang\nhttps://twitter.com/FEhrsam",
  },
  {
    name: "COO & Managing Partner",
    twitterLink: "https://twitter.com/alanapalmedo",
  },
  {
    name: "Research Partner & CTO",
    twitterLink: "https://twitter.com/gakonst",
  },
  {
    name: "General Partner & Head of Research",
    twitterLink: "https://twitter.com/danrobinson",
  },
  {
    name: "Research Partner & Head of Security",
    twitterLink: "https://twitter.com/samczsun",
  },
  {
    name: "Research Associate",
    twitterLink: "https://twitter.com/FrankieIsLost\nhttps://twitter.com/transmissions11",
  },  
];

<Table data={Paradigmdata} />

## [6thMan Ventures](https://twitter.com/6thManVentures)

export const ManVenturesData = [
  {
    name: "Co-Founder",
    twitterLink: "https://twitter.com/mdudas\nhttps://twitter.com/sergekass",
  },
  {
    name: "Partner",
    twitterLink: "https://twitter.com/CarlKVogel",
  },
  {
    name: "",
    twitterLink: "https://twitter.com/aaronmkern\nhttps://twitter.com/mustafakqazi",
  },
];

<Table data={ManVenturesData} />

## [Robot Ventures](https://twitter.com/robotventures)

export const RobotVenturesData = [
  {
    name: "",
    twitterLink: "https://twitter.com/rleshner\nhttps://twitter.com/tarunchitra\nhttps://twitter.com/hal2001",
  },
];

<Table data={RobotVenturesData} />

## [Scalar Capital](https://twitter.com/scalarcapital)

export const ScalarCapitalData = [
  {
    name: "Co-founder and Managing Director",
    twitterLink: "https://twitter.com/ljxie\nhttps://twitter.com/jcliff42",
  },
  {
    name: "Director of Finance",
    twitterLink: "https://twitter.com/ysmkymk",
  },
];

<Table data={ScalarCapitalData} />

## [Electric Capital](https://twitter.com/ElectricCapital)

export const ElectricCapitalData = [
  {
    name: "Founder",
    twitterLink: "https://twitter.com/avichal",
  },
  {
    name: "Co-founder",
    twitterLink: "https://twitter.com/jubos",
  },
  {
    name: "General Partner",
    twitterLink: "https://twitter.com/puntium\nhttps://twitter.com/MariaShen",
  },
  {
    name: "Advisor",
    twitterLink: "https://twitter.com/RebeccaRettig1",
  },
];

<Table data={ElectricCapitalData} />

## [Delphi Ventures](https://twitter.com/Delphi_Digital)

export const DelphiVenturesData = [
  {
    name: "Co-founder",
    twitterLink: "https://twitter.com/Shaughnessy119\nhttps://twitter.com/pierskicks",
  },
  {
    name: "Venture Associate",
    twitterLink: "https://twitter.com/Paul_Burlage\nhttps://twitter.com/Jeremystormsky",
  },
];

<Table data={DelphiVenturesData} />

## [a16z](https://twitter.com/a16zcrypto)

export const a16zData = [
  {
    name: "General Partner",
    twitterLink: "https://twitter.com/sriramk\nhttps://twitter.com/AriannaSimpson\nhttps://twitter.com/meigga",
  },
  {
    name: "Head of Research",
    twitterLink: "https://twitter.com/Tim_Roughgarden",
  },
  {
    name: "Chief Operating Officer",
    twitterLink: "https://twitter.com/AAlbaneseNY",
  },
  {
    name: "Investment Partner & Engineer",
    twitterLink: "https://twitter.com/0xMasonH",
  },
  {
    name: "Engineer",
    twitterLink: "https://twitter.com/moodlezoup",
  },
  {
    name: "Inverstor",
    twitterLink: "https://twitter.com/jay_drainjr",
  },
  {
    name: "",
    twitterLink: "https://twitter.com/andrewchen\nhttps://twitter.com/bhorowitz\nhttps://twitter.com/smc90\nhttps://twitter.com/kimbatronic",
  },
];

<Table data={a16zData} />

## [Dragonfly](https://twitter.com/dragonfly_xyz)

export const DragonflyData = [
  {
    name: "Managing Partner",
    twitterLink: "https://twitter.com/hosseeb",
  },
  {
    name: "General Partner",
    twitterLink: "https://twitter.com/tomhschmidt\nhttps://twitter.com/HadickM",
  },
  {
    name: "Partner & COO",
    twitterLink: "https://twitter.com/LindsayxLin",
  },
  {
    name: "Partner",
    twitterLink: "https://twitter.com/ani_pai\nhttps://twitter.com/0xsudogm",
  },
  {
    name: "Research Partner",
    twitterLink: "https://twitter.com/ivanbogatyy",
  },
  {
    name: "Data Scientist",
    twitterLink: "https://twitter.com/hildobby_",
  },
];

<Table data={DragonflyData} />

## [Multicoin Capital](https://twitter.com/multicoincap)

export const MulticoinCapitalData = [
  {
    name: "Co-Founder & Managing Partner",
    twitterLink: "https://twitter.com/KyleSamani\nhttps://twitter.com/TusharJain_",
  },
  {
    name: "General Counsel & CCO",
    twitterLink: "https://twitter.com/xethalis",
  },
  {
    name: "Partner",
    twitterLink: "https://twitter.com/johnrobertreed",
  },
  {
    name: "Investment Partner",
    twitterLink: "https://twitter.com/SpencerApplebau\nhttps://twitter.com/shayonsengupta",
  },
  {
    name: "Principal",
    twitterLink: "https://twitter.com/kankanivishal",
  },
];

<Table data={MulticoinCapitalData} />

## [Fabric Ventures](https://twitter.com/fabric_vc)

export const FabricVenturesData = [
  {
    name: "Co-Founder & Managing Partner",
    twitterLink: "https://twitter.com/richardmuirhead",
  },
  {
    name: "Co-Founder & Partner",
    twitterLink: "https://twitter.com/MerschMax_",
  },
  {
    name: "General Partner",
    twitterLink: "https://twitter.com/ahansjee",
  },
];

<Table data={FabricVenturesData} />

## [Jump Crypto](https://twitter.com/jump_)

export const JumpCryptoData = [
  {
    name: "Engineering and R&D",
    twitterLink: "https://twitter.com/jumpengineering",
  },
  {
    name: "Strategic Partnerships",
    twitterLink: "https://twitter.com/shadddowfax",
  },
  {
    name: "Head of Venture Investments",
    twitterLink: "https://twitter.com/zsparta",
  },
  {
    name: "Strategic Projects",
    twitterLink: "https://twitter.com/apram89",
  },
  {
    name: "Researcher",
    twitterLink: "https://twitter.com/theshah39",
  },
];

<Table data={JumpCryptoData} />

## [HashKey Capital](https://twitter.com/HashKey_Capital)

export const HashKeyCapitaloData = [
  {
    name: "CEO",
    twitterLink: "https://twitter.com/DC_HashKey",
  },
  {
    name: "Investment Manager",
    twitterLink: "https://twitter.com/YeruiZhang",
  },
  {
    name: "Partner",
    twitterLink: "https://twitter.com/xxintheworld",
  },
  {
    name: "",
    twitterLink: "https://twitter.com/hu_zhiwei\nhttps://twitter.com/mar2424",
  },
];

<Table data={HashKeyCapitaloData} />

## [LD Capital](https://twitter.com/LD_Capital)

export const LDCapitalData = [
  {
    name: "Founder",
    twitterLink: "https://twitter.com/Jackyi_ld",
  },
  {
    name: "Partner",
    twitterLink: "https://twitter.com/Joylou1209",
  },
  {
    name: "Marketing & IM",
    twitterLink: "https://twitter.com/sonafuturist",
  },
  {
    name: "Managing Partner",
    twitterLink: "https://twitter.com/xildcapital",
  },
];

<Table data={LDCapitalData} />

## [1kx](https://twitter.com/1kxnetwork)

export const kxData = [
  {
    name: "Founding Partner",
    twitterLink: "https://twitter.com/lalleclausen",
  },
  {
    name: "Partner",
    twitterLink: "https://twitter.com/pet3rpan_",
  },
  {
    name: "Research Partner",
    twitterLink: "https://twitter.com/dberenzon\nhttps://twitter.com/_weidai",
  },
  {
    name: "Research Analyst",
    twitterLink: "https://twitter.com/Mikey0x_",
  },
  {
    name: "Analyst",
    twitterLink: "https://twitter.com/0xtaetaehoho",
  },
  {
    name: "General Counsel",
    twitterLink: "https://twitter.com/larryflorio",
  },
  {
    name: "",
    twitterLink: "https://twitter.com/HeyoChristopher",
  },
];

<Table data={kxData} />

## [Polychain Capital](https://twitter.com/polychain)(formerly [@polychaincap](https://twitter.com/polychaincap))

export const PolychainCapitalData = [
  {
    name: "Founder & CEO",
    twitterLink: "https://twitter.com/zxocw",
  },
  {
    name: "",
    twitterLink: "https://twitter.com/nima_vaziri\nhttps://twitter.com/beavskis\nhttps://twitter.com/lukejdpearson\nhttps://twitter.com/BrianEstes32",
  },
];

<Table data={PolychainCapitalData} />

## [Pantera Capital](https://twitter.com/PanteraCapital)

export const PanteraCapitalData = [
  {
    name: "Founder & Managing Partner",
    twitterLink: "https://twitter.com/dan_pantera",
  },
  {
    name: "Managing Partner",
    twitterLink: "https://twitter.com/veradittakit",
  },
  {
    name: "Head of Cryptoeconomics",
    twitterLink: "https://twitter.com/stephensonhmatt",
  },
];

<Table data={PanteraCapitalData} />

## [The Spartan Group](https://twitter.com/TheSpartanGroup)

export const TheSpartanGroupData = [
  {
    name: "Co-Founder & Partner",
    twitterLink: "https://twitter.com/SpartanBlack_1\nhttps://twitter.com/melmelmelting\nhttps://twitter.com/CasperJohansen",
  },
  {
    name: "Investment Analyst",
    twitterLink: "https://twitter.com/tumilett",
  },
];

<Table data={TheSpartanGroupData} />

## [PetRock Capital](https://twitter.com/PetRockCapital)

export const PetRockCapitalData = [
  {
    name: "",
    twitterLink: "https://twitter.com/rijstbucket\nhttps://twitter.com/Eclair_Joel\nhttps://twitter.com/JayyQueu\nhttps://twitter.com/RonaldKooKek",
  },
];

<Table data={PetRockCapitalData} />

## [LongHash Ventures](https://twitter.com/LongHashVC)

export const LongHashVenturesData = [
  {
    name: "Founding Partner & Managing Partner",
    twitterLink: "https://twitter.com/emmacui\nhttps://twitter.com/theshikhai",
  },
];

<Table data={LongHashVenturesData} />

## [Stratified Capital](https://twitter.com/StratifiedCap)

export const StratifiedCapitalData = [
  {
    name: "Partner",
    twitterLink: "https://twitter.com/VCJaviC",
  },
  {
    name: "",
    twitterLink: "https://twitter.com/CCJS71103141",
  },
];

<Table data={StratifiedCapitalData} />

## [CoinFund](https://twitter.com/coinfund_io)

export const CoinFundData = [
  {
    name: "Founder",
    twitterLink: "https://twitter.com/jbrukh",
  },
  {
    name: "Partner",
    twitterLink: "https://twitter.com/AustinBarack",
  },
  {
    name: "Partner & Dir. Research",
    twitterLink: "https://twitter.com/EvanTheFeng",
  },
  {
    name: "",
    twitterLink: "https://twitter.com/perkinscr97",
  },
];

<Table data={CoinFundData} />

## Tower 18 Capital

export const Tower18CapitalData = [
  {
    name: "",
    twitterLink: "https://twitter.com/BrycePaul101\nhttps://twitter.com/kstanley_101",
  },
];

<Table data={Tower18CapitalData} />

## [Haun Ventures](https://twitter.com/HaunVentures)

export const HaunVenturesData = [
  {
    name: "Founder & CEO",
    twitterLink: "https://twitter.com/katie_haun",
  },
  {
    name: "Partner & Investment Team Lead",
    twitterLink: "https://twitter.com/sjrosenblum",
  },
  {
    name: "Partner",
    twitterLink: "https://twitter.com/ahnchrisj",
  },
  {
    name: "Investment Associate",
    twitterLink: "https://twitter.com/brxckinridge",
  },
];

<Table data={HaunVenturesData} />

## [Maven11Capital](https://twitter.com/Maven11Capital)

export const Maven11CapitalData = [
  {
    name: "Co-Founder",
    twitterLink: "https://twitter.com/jochemwieringa",
  },
  {
    name: "Managing Partner",
    twitterLink: "https://twitter.com/BalderBomans",
  },
  {
    name: "Research",
    twitterLink: "https://twitter.com/0xRainandCoffee",
  },
  {
    name: "",
    twitterLink: "https://twitter.com/MathijsvEsch\nhttps://twitter.com/dariusrugys\nhttps://twitter.com/cryptobelix",
  },
];

<Table data={Maven11CapitalData} />

## [Tribe Capital](https://twitter.com/tribecap)

export const TribeCapitalData = [
  {
    name: "Co-Founder & General Partner",
    twitterLink: "https://twitter.com/Maidenberg\nhttps://twitter.com/jonathanhsu",
  },
  {
    name: "Co-Founding Partner",
    twitterLink: "https://twitter.com/alexnchee",
  },
  {
    name: "",
    twitterLink: "https://twitter.com/wakkadojo\nhttps://twitter.com/arjunsethi\nhttps://twitter.com/brevsin\nhttps://twitter.com/RyanGGeorge",
  },
];

<Table data={TribeCapitalData} />

## [Chapter One](https://twitter.com/chapterone)

export const ChapterOneData = [
  {
    name: "Managing Partner",
    twitterLink: "https://twitter.com/jmj",
  },
  {
    name: "Investing Partner",
    twitterLink: "https://twitter.com/JackLipstone\nhttps://twitter.com/seidtweets",
  },
  {
    name: "",
    twitterLink: "https://twitter.com/CryptoClayman",
  },
];

<Table data={ChapterOneData} />

## [Figment Capital](https://twitter.com/FigmentCapital)

export const FigmentCapitalData = [
  {
    name: "Investment team",
    twitterLink: "https://twitter.com/VelvetMilkman\nhttps://twitter.com/DougieDeLuca\nhttps://twitter.com/tracecrypto1",
  },
  {
    name: "intern",
    twitterLink: "https://twitter.com/VelvetMilkman",
  },
];

<Table data={FigmentCapitalData} />