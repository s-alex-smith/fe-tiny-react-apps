import React from "react";

const ItemList = props => {
  return (
    <ul>
      <button
        onClick={() => {
          props.sortByDueDate();
        }}
      >
        Sort by due-date
      </button>
      <button
        onClick={() => {
          props.sortByActivity();
        }}
      >
        Sort by activity
      </button>
      {props.items.map(item => {
        return (
          <li key={item.activity}>
            <p>{item.activity}</p>
            <button
              onClick={() => {
                props.deleteItem(item.activity);
              }}
            >
              Completed!
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ItemList;
