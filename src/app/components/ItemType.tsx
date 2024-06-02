import React from 'react';

const ITEM_TYPES = {
  FOOD: {
    type: "FOOD",
    options: ["GIANT-EAGLE", "WHOLEFDS"]
  },
  UTILITY: {
    type: "UTILITY",
    options: ["PEOPLES GAS", "WASTE MGMT", "COMCAST", "WEST VIEW WATER", "JORDANTAX", "DUQUESNE LIGHT"]
  },
  SUBSCRIPTION: {
    type: "SUBSCRIPTION",
    options: ["NETFLIX", "ARLO", "Spotify"]
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
    options: []
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
      "PIADA",
      "CONDADO",
      "SESAME INN",
      "MANDYS",
      "THAI RED CURRY",
      "BURGATORY",
      "DOCE TAQUERIA",
      "PANERA",
      "KFC",
      "SUSHI TOMO"]
  },
  PETS: {
    type: "PETS",
    options: []
  },
  BLOW_MONEY: {
    type: "BLOW MONEY",
    options: []
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
    type: "COFFEE DATE",
    options: ["ANCHOR & ANVIL", "CAFE CONMIGO", "CONVIVE", "STARBUCKS"]
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