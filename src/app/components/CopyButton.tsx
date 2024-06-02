import React, { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import getMonth from 'date-fns/getMonth'

import LineItem from './LineItem';

import { getType, getTypeDescription } from './ItemType';

const convertMonth = (month: string): number => {
  switch (month) {
    case "January":
      return 0;
    case "February":
      return 1;
    case "March":
      return 2;
    case "April":
      return 3;
    case "May":
      return 4;
    case "June":
      return 5;
    case "July":
      return 6;
    case "August":
      return 7;
    case "September":
      return 8;
    case "October":
      return 9;
    case "November":
      return 10;
    case "December":
      return 11;
    default:
      return 0;
  }
}

interface CopyItems {
  items: string;
  count: number;
}

function CopyToClipboard(props: any) {

  const { queryHeaders } = useSelector((state: any) => state.data);

  const { filteredLineItems } = props;

  const copiedItemsBucket: CopyItems = useMemo(() => {

    let count = 0;
    const items: string = filteredLineItems.reduce((acc: string, item: string) => {
      if (item[queryHeaders.amount]) {
        count++;
        return acc +
          `${item[queryHeaders.date]},${item[queryHeaders.description].replace(",", "")},${item[queryHeaders.amount].replace(",", "").replace("$", "")},${getTypeDescription(getType(item[queryHeaders.description]))},${queryHeaders.source ?? ""}\n`;
      } else {
        return acc;
      }
    }, '')
    return { items, count };
  },
    [filteredLineItems, queryHeaders]);


  const copyToClipboard = async () => {
    try {
      const copy = copiedItemsBucket.items;
      await navigator.clipboard.writeText(copy);
      alert('Actually Lines copied:' + copiedItemsBucket.count);
    } catch (error) {
      alert('Error copying to clipboard:' + error);
    }
  };

  return (
    <button onClick={copyToClipboard}>
      Copy roughly {copiedItemsBucket.count} to Clipboard
    </button>
  )
}

export default CopyToClipboard;