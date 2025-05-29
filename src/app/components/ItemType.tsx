import React from 'react';

type ItemType = {
  [key: string]: {
    type: string;
    options: string[];
  };
};

const ITEM_TYPES: ItemType = {
  FOOD: {
    type: "FOOD",
    options: [
      "GIANT-EAGLE",
      "WHOLEFDS",
      "ALDI"
    ]
  },
  UTILITY: {
    type: "UTILITY",
    options: [
      "PEOPLES GAS",
      "WM.COM",
      "COMCAST",
      "WEST VIEW WATER",
      "JORDANTAX",
      "DUQUESNE LIGHT"]
  },
  SUBSCRIPTION: {
    type: "SUBSCRIPTION",
    options: [
      "NETFLIX",
      "ARLO TECH",
      "Spotify",
      "CROOKED",
      "HELP.MAX.COM",
      "FORGE",
      "ZOOM",
      "GOOGLE *YouTubePremium"]
  },
  HOBBY: {
    type: "HOBBY",
    options: ["IRON CITY"]
  },
  HOUSE: {
    type: "HOUSE",
    options: ["HOMEDEPOT", "HOME DEPOT", "LOWES", "LOWE'S"]
  },
  CAR: {
    type: "CAR",
    options: ["JIM SHORKEY"]
  },
  GIFT: {
    type: "GIFT",
    options: []
  },
  EVENTS: {
    type: "EVENTS",
    options: []
  },
  MEDICAL: {
    type: "MEDICAL",
    options: []
  },
  FEES: {
    type: "FEES",
    options: ["TRANSACTION LIMIT FEE"]
  },
  OTHER: {
    type: "OTHER",
    options: []
  },
  EATING_OUT: {
    type: "EATING OUT",
    options: [
      "BURGATORY",
      "CONDADO",
      "DOCE TAQUERIA",
      "HAL",
      "KAWA",
      "KFC",
      "MANDYS",
      "NANBAN",
      "PANERA",
      "PIADA",
      "DIM SUM",
      "RAMEN KING",
      "REDORCHID",
      "SESAME INN",
      "SUSHI TOMO",
      "THAI RED CURRY",
      "WHEELFISH",
      "DIBELLAS"
    ]
  },
  PETS: {
    type: "PETS",
    options: ["NORTH BOROS"]
  },
  BLOW_MONEY: {
    type: "BLOW MONEY",
    options: ["MR SMALLS", "THUNDERBIRD"]
  },
  DATE: {
    type: "DATE",
    options: []
  },
  WORK: {
    type: "WORK",
    options: []
  },
  TAXES: {
    type: "TAXES",
    options: []
  },
  PERSONAL_UPKEEP: {
    type: "PERSONAL UPKEEP",
    options: []
  },
  SAVINGS: {
    type: "SAVINGS",
    options: []
  },
  INVESTMENT: {
    type: "INVESTMENT",
    options: []
  },
  COFFEE: {
    type: "COFFEE DATES",
    options: [
      "ANCHOR & ANVIL",
      "CAFE CONMIGO",
      "CONVIVE",
      "STARBUCKS",
      "KOALA COFFEE",
      "BUTTERWOOD"]
  },
  CASH: {
    type: "CASH",
    options: []
  },
  GAS: {
    type: "GAS",
    options: []
  },
  VACATION: {
    type: "VACATION",
    options: []
  },
  MORTGAGE:
  {
    type: "MORTGAGE",
    options: ["ONLINE PAYMENT TO                XXXXX4268"]
  }
}

const getType = (description: string) => {
  let type = "";
  Object.keys(ITEM_TYPES).some((key) => {
    return ITEM_TYPES[key].options.some((option: string) => {
      const rv = description.includes(option);
      if (rv) {
        type = key;
      }
      return rv;
    });
  });
  return type;
}

const getTypeDescription = (type: string) => {
  return ITEM_TYPES[type] ? ITEM_TYPES[type].type : "CHANGE ME";
}

function ItemType(props: any) {
  const { description } = props;
  if (!description) {
    return <></>
  }
  const type = getType(description);
  if (type) {
    return (
      <>
        {ITEM_TYPES[type].type}
      </>
    );
  }
  return (
    <>
      TYPE
    </>
  );
}

export default ItemType;
export { getType, getTypeDescription };