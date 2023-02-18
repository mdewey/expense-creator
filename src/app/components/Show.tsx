import React from 'react';
import { useSelector } from 'react-redux';
import getMonth from 'date-fns/getMonth'

import LineItem from './LineItem';

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

function Show() {
  const { lineItems, queryHeaders, selectedMonth: month } = useSelector((state: any) => state.data);
  if (!queryHeaders) {
    return <div>
      <h1>Missing column Headers</h1>;
    </div>
  } else {
    return (
      <div>
        <h2>showing items for {month}</h2>
        <ul>
          {lineItems.filter((f: any) => {
            console.log(getMonth(new Date(f[queryHeaders.date])))
            return getMonth(new Date(f[queryHeaders.date])) === convertMonth(month);
          }).map((item: any) => <LineItem key={item.id} item={item} />
          )}
        </ul>
      </div>
    );

  }
}

export default Show;