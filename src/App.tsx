import React, { useState } from "react";
import Form from "./components/Form";

const App = () => {
  const [items, setItems] = useState();

  return (
    <main>
      <Form />
    </main>
  );
};

export default App;
