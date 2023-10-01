import React, { useState } from "react";
import Form from "./components/Form";

const App = () => {
  const [items, setItems] = useState();

  const addItem = (item: string): void => {
    console.log(item);
  };

  return (
    <main className="section-center">
      <Form addItem={addItem} />
    </main>
  );
};

export default App;
