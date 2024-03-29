import React from 'react';
import { useSelector } from 'react-redux';
import ItemType from './ItemType';
function LineItem(props: any) {
  const { queryHeaders } = useSelector((state: any) => state.data);

  const { item } = props;
  if (!item[queryHeaders.amount]) {
    return <></>
  }
  return (
    <li>
      {item[queryHeaders.date]},
      {item[queryHeaders.description].replace(",", "")},
      {item[queryHeaders.amount].replace(",", "").replace("$", "")},
      <ItemType description={item[queryHeaders.description]} />,
      {queryHeaders.source}
    </li>
  );
}

export default LineItem;