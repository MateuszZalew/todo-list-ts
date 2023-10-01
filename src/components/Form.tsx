import React, { useState } from "react";

interface FormProps {
  addItem: (text: string) => void;
}

const Form = ({ addItem }: FormProps): JSX.Element => {
  const [inputValue, setInputValue] = useState("");
  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addItem(inputValue);
    setInputValue("");
  };

  const updateInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <form onSubmit={submitForm}>
      <h4>Grocery Bud</h4>
      <div className="form-control">
        <input
          type="text"
          className="form-input"
          placeholder="Add item"
          value={inputValue}
          onChange={updateInput}
        />
        <button type="submit" className="btn">
          Add Item
        </button>
      </div>
    </form>
  );
};

export default Form;
