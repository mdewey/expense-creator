import React from 'react';
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

function CopyToClipboard(props: any) {

  const { queryHeaders } = useSelector((state: any) => state.data);

  const { filteredLineItems } = props;


  const copyToClipboard = async () => {
    try {
      const copy = filteredLineItems.reduce((acc: string, item: string) => {
        return acc +
          `${item[queryHeaders.date]},${item[queryHeaders.description].replace(",", "")},${item[queryHeaders.amount].replace(",", "").replace("$", "")},${getTypeDescription(getType(item[queryHeaders.description]))},${queryHeaders.source ?? ""}\n`;
      }, '');
      await navigator.clipboard.writeText(copy);
      alert('Lines copied:' + filteredLineItems.length);
    } catch (error) {
      alert('Error copying to clipboard:' + error);
    }
  };

  return (
    <button onClick={copyToClipboard}>
      Copy {filteredLineItems.length} to Clipboard
    </button>
  )
}

export default CopyToClipboard;