import React from 'react';


const ITEM_TYPES = {
  FOOD: {
    type: "FOOD",
    options: ["GIANT-EAGLE", "WHOLEFDS"]
  },
  UTILITY: {
    type: "UTILITY",
    options: []
  },
  SUBSCRIPTION: {
    type: "SUBSCRIPTION",
    options: ["NETFLIX"]
  },
  HOBBY: {
    type: "HOBBY",
    options: []
  },
  HOUSE: {
    type: "HOUSE",
    options: []
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
    options: []
  },
  OTHER: {
    type: "OTHER",
    options: []
  },
  EATING_OUT: {
    type: "EATING_OUT",
    options: []
  },
  PETS: {
    type: "PETS",
    options: []
  },
  BLOW_MONEY: {
    type: "BLOW_MONEY",
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
    type: "PERSONAL_UPKEEP",
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
    type: "COFFEE",
    options: []
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

function ItemType(props) {
  const { description } = props;
  if (!description) {
    return <></>
  }
  let type = "";
  const test = Object.keys(ITEM_TYPES).some((key) => {
    return ITEM_TYPES[key].options.some((option: string) => {
      const rv = description.includes(option);
      console.log({ option, description, rv })
      if (rv) {
        type = key;
      }
      return rv;
    });
  });
  // const test = 
  console.log({ test, type })
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