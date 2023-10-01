import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import ItemsList from "./components/ItemsList";
import { nanoid } from "nanoid";

interface Item {
  readonly id: string;
  text: string;
  isCompleted: boolean;
}

const setLocalStorage = (items) => {
  localStorage.setItem("items", JSON.stringify(items));
};

const App = () => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    let savedItems = localStorage.getItem("items");
    if (typeof savedItems === "string") {
      const initialData: Item[] = JSON.parse(savedItems);
      setItems(initialData);
    }
  }, []);

  const addItem = (newItemText: string): void => {
    const newItem = { id: nanoid(), text: newItemText, isCompleted: false };
    const netItems = [...items, newItem];
    setItems(netItems);
    setLocalStorage(netItems);
  };

  const updateItem = (id: string): void => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        const newItem = { ...item, isCompleted: !item.isCompleted };
        return newItem;
      }
      return item;
    });
    setItems(newItems);
    setLocalStorage(newItems);
  };

  const deleteItem = (id: string): void => {
    const newArray = items.filter((item) => item.id !== id);
    setItems(newArray);
    setLocalStorage(newArray);
  };

  return (
    <main className="section-center">
      <Form addItem={addItem} />
      <ItemsList
        items={items}
        updateItem={updateItem}
        deleteItem={deleteItem}
      />
    </main>
  );
};

export default App;
