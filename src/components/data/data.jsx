import ChiangDao from "../../picture/ChiangDao.jpg"
import PhuKradueng from "../../picture/PhuKradueng.jpg"
import KhaoYai from "../../picture/KhaoYai.jpg"
import DoiLuangTak from "../../picture/DoiLuangTak.jpg"
import DoiInthanon from "../../picture/DoiInthanon.jpg"
import KhaoChangPuak from "../../picture/KhaoChangPuak.jpg"
import TongariroAlpineCrossing from "../../picture/TongariroAlpineCrossing.jpg"
import MilfordTrack from "../../picture/MilfordTrack.jpg"
import Routeburn from "../../picture/Routeburn.jpg"
import AbelTasmanCoast from "../../picture/AbelTasmanCoast.jpg"
import TheKeplerTrack from "../../picture/TheKeplerTrack.jpg"
import BenLomondTrack from "../../picture/BenLomondTrack.jpg"
import CanadianRockies from "../../picture/CanadianRockies.jpg"
import CoastMountains from "../../picture/CoastMountains.jpg"
import StEliasMountains from "../../picture/StEliasMountains.jpg"
import QuebecNationalPark from "../../picture/QuebecNationalPark.jpg"
import WestCoastTrail from "../../picture/WestCoastTrail.jpg"
import BruceTrail from "../../picture/BruceTrail.jpg"
import LaugavegurinnTrail from "../../picture/LaugavegurinnTrail.jpeg"
import FimmvörðuhálsTrek from "../../picture/FimmvörðuhálsTrek.jpg"
import SkaftafellNationalPark from "../../picture/SkaftafellNationalPark.jpg"
import Hvannadalshnúkur from "../../picture/Hvannadalshnúkur.jpg"
import Kirkjufell from "../../picture/Kirkjufell.jpg"
import Esja from "../../picture/Esja.jpg"
import WestHighlandWay from "../../picture/Esja.jpg"
import BenNevis from "../../picture/BenNevis.jpg"
import LochLomondandTheTrossachsNationalPark from "../../picture/LochLomondandTheTrossachsNationalPark.jpg"
import BuachailleEtiveMor from "../../picture/BuachailleEtiveMor.jpg"
import TheCuillin from "../../picture/TheCuillin.jpg"
import BenLomond from "../../picture/BenLomond.jpg"

import Galdhøpiggen from "../../picture/Galdhøpiggen.jpg"
import Ryten from "../../picture/Ryten.jpg"
import Preikestolen from "../../picture/Preikestolen.jpg"
import Trolltunga from "../../picture/Trolltunga.jpeg"
import Besseggen from "../../picture/Besseggen.jpg"
import Lofoten from "../../picture/Lofoten.jpg"
     
const randomPrice = () => {
  return (
    Math.floor((Math.random() * 800) + 200)
  )
}

const randomDay = () => {
  return (
    Math.floor((Math.random() * 3) + 1)
  )
}

const randomNight = () => {
  return (
    Math.floor((Math.random() * 2) + 1)
  )
}
const randomRate = () => {
  const number = Math.random() * (4.9 - 4.0) + 4.0;
  return (
    number.toFixed(1)
  )
}

const randomReview = () => {
  // return(
  //   Math.floor((Math.random() * 1999) + 100)
  // )
  let randomNumber = Math.floor((Math.random() * 1999) + 100); // Generate random number

  // Add commas if the number exceeds 1,000
  if (randomNumber >= 1000) {
    randomNumber = randomNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return randomNumber;
}


export const items = [
  {
    name: "Chiang Dao",
    category: "Thailand",
    price: randomPrice(),
    day: randomDay(),
    night: randomNight(),
    src: ChiangDao,
    rate: randomRate(),
    review: randomReview()
  },
  {
    name: "Phu Kradueng",
    category: "Thailand",
    price: randomPrice(),
    day: randomDay(),
    night: randomNight(),
    src: PhuKradueng,
    rate: randomRate(),
    review: randomReview()
  },
  {
    name: "Khao Yai",
    category: "Thailand",
    price: randomPrice(),
    day: randomDay(),
    night: randomNight(),
    src: KhaoYai,
    rate: randomRate(),
    review: randomReview()
  },
  {
    name: "Doi Luang Tak",
    category: "Thailand",
    price: randomPrice(),
    day: randomDay(),
    night: randomNight(),
    src: DoiLuangTak,
    rate: randomRate(),
    review: randomReview()
  },
  {
    name: "Doi Inthanon",
    category: "Thailand",
    price: randomPrice(),
    day: randomDay(),
    night: randomNight(),
    src: DoiInthanon,
    rate: randomRate(),
    review: randomReview()
  },
  {
    name: "Khao Chang Puak",
    category: "Thailand",
    price: randomPrice(),
    day: randomDay(),
    night: randomNight(),
    src: KhaoChangPuak,
    rate: randomRate(),
    review: randomReview()
  },
  {
    name: "Tongariro Alpine Crossing",
    category: "New Zealand",
    price: randomPrice(),
    day: randomDay(),
    night: randomNight(),
    src: TongariroAlpineCrossing,
    rate: randomRate(),
    review: randomReview()
  },
  {
    name: "Milford Track",
    category: "New Zealand",
    price: randomPrice(),
    day: randomDay(),
    night: randomNight(),
    src: MilfordTrack,
    rate: randomRate(),
    review: randomReview()
  },
  {
    name: "Routeburn Track",
    category: "New Zealand",
    price: randomPrice(),
    day: randomDay(),
    night: randomNight(),
    src: Routeburn,
    rate: randomRate(),
    review: randomReview()
  },
  {
    name: "Abel Tasman Coast",
    category: "New Zealand",
    price: randomPrice(),
    day: randomDay(),
    night: randomNight(),
    src: AbelTasmanCoast,
    rate: randomRate(),
    review: randomReview()
  },
  {
    name: "The Kepler Track",
    category: "New Zealand",
    price: randomPrice(),
    day: randomDay(),
    night: randomNight(),
    src: TheKeplerTrack,
    rate: randomRate(),
    review: randomReview()
  },
  {
    name: "Ben Lomond Track",
    category: "New Zealand",
    price: randomPrice(),
    day: randomDay(),
    night: randomNight(),
    src: BenLomondTrack,
    rate: randomRate(),
    review: randomReview()
  },
  {
    name: "Canadian Rockies",
    category: "Canada",
    price: randomPrice(),
    day: randomDay(),
    night: randomNight(),
    src: CanadianRockies,
    rate: randomRate(),
    review: randomReview()
  },
  {
    name: "CoastMountains",
    category: "Canada",
    price: randomPrice(),
    day: randomDay(),
    night: randomNight(),
    src: CoastMountains,
    rate: randomRate(),
    review: randomReview()
  },
  {
    name: "St Elias Mountains",
    category: "Canada",
    price: randomPrice(),
    day: randomDay(),
    night: randomNight(),
    src: StEliasMountains,
    rate: randomRate(),
    review: randomReview()
  },
  {
    name: "Quebec National Park",
    category: "Canada",
    price: randomPrice(),
    day: randomDay(),
    night: randomNight(),
    src: QuebecNationalPark,
    rate: randomRate(),
    review: randomReview()
  },
  {
    name: "West Coast Trail",
    category: "Canada",
    price: randomPrice(),
    day: randomDay(),
    night: randomNight(),
    src: WestCoastTrail,
    rate: randomRate(),
    review: randomReview()
  },
  {
    name: "Bruce Trail",
    category: "Canada",
    price: randomPrice(),
    day: randomDay(),
    night: randomNight(),
    src: BruceTrail,
    rate: randomRate(),
    review: randomReview()
  },
  {
    name: "Laugavegurinn Trail",
    category: "Iceland",
    price: randomPrice(),
    day: randomDay(),
    night: randomNight(),
    src: LaugavegurinnTrail,
    rate: randomRate(),
    review: randomReview()
  },
  {
    name: "Fimmvörðuháls Trek",
    category: "Iceland",
    price: randomPrice(),
    day: randomDay(),
    night: randomNight(),
    src: FimmvörðuhálsTrek,
    rate: randomRate(),
    review: randomReview()
  }
  ,
  {
    name: "Skaftafell National Park",
    category: "Iceland",
    price: randomPrice(),
    day: randomDay(),
    night: randomNight(),
    src: SkaftafellNationalPark,
    rate: randomRate(),
    review: randomReview()
  }
  ,
  {
    name: "Hvannadalshnúkur",
    category: "Iceland",
    price: randomPrice(),
    day: randomDay(),
    night: randomNight(),
    src: Hvannadalshnúkur,
    rate: randomRate(),
    review: randomReview()
  }
  ,
  {
    name: "Kirkjufell",
    category: "Iceland",
    price: randomPrice(),
    day: randomDay(),
    night: randomNight(),
    src: Kirkjufell,
    rate: randomRate(),
    review: randomReview()
  }
  ,
  {
    name: "Esja",
    category: "Iceland",
    price: randomPrice(),
    day: randomDay(),
    night: randomNight(),
    src: Esja,
    rate: randomRate(),
    review: randomReview()
  },
  { 
    name: "West Highland Way", 
    category: "Scotland",
    price: randomPrice(),
    day: randomDay(),
    night: randomNight(),
    src: WestHighlandWay,
    rate: randomRate(),
    review: randomReview()
  },
  {
    name: "Ben Nevis",
    category: "Scotland",
    price: randomPrice(),
    day: randomDay(),
    night: randomNight(),
    src: BenNevis,
    rate: randomRate(),
    review: randomReview()
  },
  {
    name: "Loch Lomond and The Trossachs National Park",
    category: "Scotland",
    price: randomPrice(),
    day: randomDay(),
    night: randomNight(),
    src: LochLomondandTheTrossachsNationalPark,
    rate: randomRate(),
    review: randomReview()
  },
  {
    name: "Buachaille Etive Mor",
    category: "Scotland",
    price: randomPrice(),
    day: randomDay(),
    night: randomNight(),
    src: BuachailleEtiveMor,
    rate: randomRate(),
    review: randomReview()
  },
  {
    name: "The Cuillin",
    category: "Scotland",
    price: randomPrice(),
    day: randomDay(),
    night: randomNight(),
    src: TheCuillin,
    rate: randomRate(),
    review: randomReview()
  },
  {
    name: "Ben Lomond",
    category: "Scotland",
    price: randomPrice(),
    day: randomDay(),
    night: randomNight(),
    src: BenLomond,
    rate: randomRate(),
    review: randomReview()
  },
  {
    name: "Galdhøpiggen",
    category: "Norway",
    price: randomPrice(),
    day: randomDay(),
    night: randomNight(),
    src: Galdhøpiggen,
    rate: randomRate(),
    review: randomReview()
  },
  {
    name: "Ryten",
    category: "Norway",
    price: randomPrice(),
    day: randomDay(),
    night: randomNight(),
    src: Ryten,
    rate: randomRate(),
    review: randomReview()
  },
  {
    name: "Preikestolen",
    category: "Norway",
    price: randomPrice(),
    day: randomDay(),
    night: randomNight(),
    src: Preikestolen,
    rate: randomRate(),
    review: randomReview()
  },
  {
    name: "Trolltunga",
    category: "Norway",
    price: randomPrice(),
    day: randomDay(),
    night: randomNight(),
    src: Trolltunga,
    rate: randomRate(),
    review: randomReview()
  },
  {
    name: "Besseggen",
    category: "Norway",
    price: randomPrice(),
    day: randomDay(),
    night: randomNight(),
    src: Besseggen,
    rate: randomRate(),
    review: randomReview()
  },
  {
    name: "Lofoten",
    category: "Norway",
    price: randomPrice(),
    day: randomDay(),
    night: randomNight(),
    src: Lofoten,
    rate: randomRate(),
    review: randomReview()
  }

];
