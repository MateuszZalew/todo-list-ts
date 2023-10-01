import React, { useState, useEffect } from "react";
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

  useEffect(() => {
    let savedItems = localStorage.getItem("items");
    if (typeof savedItems === "string") {
      const initialData = JSON.parse(savedItems);
      setItems(initialData);
    }
  }, []);

  const addItem = (newItemText: string): void => {
    const newItem = { id: nanoid(), text: newItemText, isCompleted: false };
    setItems([...items, newItem]);
    localStorage.setItem("items", JSON.stringify([...items, newItem]));
  };

  const deleteItem = (id: string): void => {
    const newArray = items.filter((item) => item.id !== id);
    setItems(newArray);
    localStorage.setItem("items", JSON.stringify(newArray));
  };

  return (
    <main className="section-center">
      <Form addItem={addItem} />
      <ItemsList items={items} deleteItem={deleteItem} />
    </main>
  );
};

export default App;
