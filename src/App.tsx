import React, { useState } from "react";
import Form from "./components/Form";
import ItemsList from "./components/ItemsList";
import { nanoid } from "nanoid";

interface Item {
  readonly id: string;
  text: string;
  isCompleted: boolean;
}

const App = () => {
  const [items, setItems] = useState<Item[]>([]);

  const addItem = (newItemText: string): void => {
    setItems([
      ...items,
      { id: nanoid(), text: newItemText, isCompleted: false },
    ]);
  };

  const deleteItem = (id: string): void => {
    const newArray = items.filter((item) => item.id !== id);
    setItems(newArray);
  };

  return (
    <main className="section-center">
      <Form addItem={addItem} />
      <ItemsList items={items} deleteItem={deleteItem} />
    </main>
  );
};

export default App;
