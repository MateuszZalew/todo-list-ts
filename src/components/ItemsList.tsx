import React from "react";
import SingleItem from "./SingleItem";

interface Item {
  readonly id: string;
  text: string;
  isCompleted: boolean;
}

interface ItemsLIstProps {
  items: Item[];
  updateItem: (id: string) => void;
  deleteItem: (id: string) => void;
}

const ItemsList = ({ items, updateItem, deleteItem }: ItemsLIstProps) => {
  return (
    <ul className="items">
      {items.map((item) => (
        <SingleItem
          key={item.id}
          item={item}
          updateItem={updateItem}
          deleteItem={deleteItem}
        />
      ))}
    </ul>
  );
};

export default ItemsList;
