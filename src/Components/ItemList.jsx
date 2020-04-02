import React from "react";

const ItemList = props => {
  return (
    <ul>
      {props.items.map(item => {
        return (
          <li key={item.activity}>
            <p>{item.activity}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default ItemList;
