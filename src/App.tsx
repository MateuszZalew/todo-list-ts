import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import ItemsList from "./components/ItemsList";
import { nanoid } from "nanoid";
import { ToastContainer, toast } from "react-toastify";

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
    if (!newItemText) {
      toast.error("Please input a valid item", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
    const newItem = { id: nanoid(), text: newItemText, isCompleted: false };
    const netItems = [...items, newItem];
    setItems(netItems);
    setLocalStorage(netItems);
    toast.success("Item added!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
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
    toast.success("Item deleted!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <main className="section-center">
      <ToastContainer />
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
