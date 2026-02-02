import React from "react";
import { useContext, useState } from "react";
import { outputContext } from "./Context/AuthContext";
import "./InputScreen.css";

function InputScreen() {
  const { handleInputFormData } = useContext(outputContext);

  const [inputFormData, setInputFormData] = useState({
    operator: "",
    description: "",
    amount: "",
  });

  // Input chnage handle
  function handleFormChange(e) {
    setInputFormData((prev) => {
      return { ...prev, [e.target.id]: e.target.value };
    });
  }

  function submitHandle(e) {
    e.preventDefault();
    handleInputFormData(inputFormData);
    setInputFormData(() => {
      return { operator: "", description: "", amount: "" };
    });
  }
  return (
    <form action="" onSubmit={submitHandle}>
      <select
        required
        name="operator"
        id="operator"
        value={inputFormData.operator}
        onChange={handleFormChange}
        className="operator"
      >
        <option value="" disabled hidden>
          Select operator
        </option>
        <option value="+">+</option>
        <option value="-">-</option>
      </select>
      {/* {inputFormData.operator}
        {inputFormData.description}
        {inputFormData.amount} */}
      <input
        required
        type="text"
        placeholder="Add description"
        id="description"
        className="description"
        value={inputFormData.description}
        onChange={handleFormChange}
      />
      <input
        required
        type="number"
        placeholder="0"
        id="amount"
        className="amount"
        value={inputFormData.amount}
        onChange={handleFormChange}
      />
      <input type="submit" className="submitBtn" value="✔" />
    </form>
  );
}

export default InputScreen;
