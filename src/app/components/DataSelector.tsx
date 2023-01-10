import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateQueryHeaders } from '../slices/data.slice';

const dropDown = (options: any, onChange: React.ChangeEventHandler<HTMLSelectElement> | undefined) => {
  if (!options) return null;
  return (
    <select onChange={onChange}>
      <option value="">SELECT AN OPTION</option>
      {options.map((option: any) => {
        return (
          <option key={option} value={option}>
            {option}
          </option>
        );
      })}
    </select>
  );
};



const DataSelector = () => {
  const { headerOptions } = useSelector((state: any) => state.data);
  const dispatch = useDispatch();
  const updateSelection = (which: string, event: any) => {
    dispatch(updateQueryHeaders({ which, value: event.target.value } as any));
  }
  return (
    <div>
      <div>
        <label htmlFor="date">Date</label>
        {dropDown(headerOptions, (event: any) => updateSelection('date', event))}
      </div>
      <div>
        <label htmlFor="description">Description</label>
        {dropDown(headerOptions, (event: any) => updateSelection('description', event))}
      </div>
      <div>
        <label htmlFor="amount">amount</label>
        {dropDown(headerOptions, (event: any) => updateSelection('amount', event))}
      </div>
      <div>
        <label htmlFor="type">source</label>
        <input type="text" onChange={(event) => updateSelection("source", event)} />
      </div>
    </div>
  );
};

export default DataSelector;