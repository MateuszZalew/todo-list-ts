import React from "react";

interface Item {
  readonly id: string;
  text: string;
  isCompleted: boolean;
}

interface SingleItemProps {
  item: Item;
  updateItem: (id: string) => void;
  deleteItem: (id: string) => void;
}

const SingleItem = ({
  item,
  deleteItem,
  updateItem,
}: SingleItemProps): JSX.Element => {
  const updateIsChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateItem(item.id);
  };

  const handleDeleteItem = () => {
    deleteItem(item.id);
  };

  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={item.isCompleted}
        onChange={updateIsChecked}
      />
      <p className={`${item.isCompleted ? "completed-task" : ""}`}>
        {item.text}
      </p>
      <button className="btn remove-btn" onClick={handleDeleteItem}>
        Delete
      </button>
    </div>
  );
};

export default SingleItem;
