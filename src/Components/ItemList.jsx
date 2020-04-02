import React from "react";

const ItemList = props => {
  return (
    <ul>
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
