import React from 'react';
import { useSelector } from 'react-redux';
function LineItem(props: any) {
  const { queryHeaders } = useSelector((state: any) => state.data);

  const { item } = props;
  console.log(queryHeaders, item)
  return (
    <li>
      {item[queryHeaders.date]}, {item[queryHeaders.description]}, {item[queryHeaders.amount]}, TYPE, {queryHeaders.source}
    </li>
  );
}

export default LineItem;