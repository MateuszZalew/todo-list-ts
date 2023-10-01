import React, { useState } from "react";

interface Item {
  readonly id: string;
  text: string;
  isCompleted: boolean;
}

interface SingleItemProps {
  item: Item;
  deleteItem: (id: string) => void;
}

const SingleItem = ({ item, deleteItem }: SingleItemProps): JSX.Element => {
  const [isChecked, setIsChecked] = useState(item.isCompleted);

  const updateIsChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  };

  const handleDeleteItem = () => {
    deleteItem(item.id);
  };

  return (
    <div className="single-item">
      <input type="checkbox" checked={isChecked} onChange={updateIsChecked} />
      <p className={`${isChecked ? "completed-task" : ""}`}>{item.text}</p>
      <button className="btn remove-btn" onClick={handleDeleteItem}>
        Delete
      </button>
    </div>
  );
};

export default SingleItem;
