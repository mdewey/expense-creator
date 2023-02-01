import React from 'react';
import { useSelector } from 'react-redux';
import LineItem from './LineItem';
function Show() {
  const { lineItems, queryHeaders } = useSelector((state: any) => state.data);
  console.log(lineItems)
  if (!queryHeaders) {
    return <div>
      <h1>Missing column Headers</h1>;
    </div>
  } else {
    return (
      <div>
        <ul>
          {lineItems.filter((f: any) => {
            return f;
          }).map((item: any) => <LineItem key={item.id} item={item} />
          )}
        </ul>
      </div>
    );

  }
}

export default Show;