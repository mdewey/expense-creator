import React from 'react';
import { useSelector } from 'react-redux';
import ItemType from './ItemType';
function LineItem(props: any) {
  const { queryHeaders } = useSelector((state: any) => state.data);

  const { item } = props;
  console.log(queryHeaders, item)
  return (
    <li>
      {item[queryHeaders.date]},
      {item[queryHeaders.description]},
      {item[queryHeaders.amount]},
      <ItemType description={item[queryHeaders.description]} />,
      {queryHeaders.source}
    </li>
  );
}

export default LineItem;