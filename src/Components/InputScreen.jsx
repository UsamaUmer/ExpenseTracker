import React from "react";
import { useContext, useState } from "react";
import { outputContext } from "./Context/AuthContext";

function InputScreen() {
  const {handleInputFormData} = useContext(outputContext);

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
  }
  return (
    <div>
      <form action="" onSubmit={submitHandle}>
        <select
          required
          name="operator"
          id="operator"
          value={inputFormData.operator}
          onChange={handleFormChange}
        >
          <option value="" disabled hidden>
            Select value
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
          value={inputFormData.description}
          onChange={handleFormChange}
        />
        <input
          required
          type="number"
          placeholder="0"
          id="amount"
          value={inputFormData.amount}
          onChange={handleFormChange}
        />
        <input type="submit" className="submit" value="Submit" />
      </form>
    </div>
  );
}

export default InputScreen;
