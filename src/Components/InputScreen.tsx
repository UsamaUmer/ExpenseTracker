import React, { useState } from "react";
import "./InputScreen.css";
import { useDispatch } from "react-redux";
import { handleInputFormDatas } from './Context/Slice/authContext'

function InputScreen() {
  // const { handleInputFormData } = useContext(outputContext);
  type InputFormData = {
  operator: "" | "+" | "-";
  description: string;
  amount: string;
};
type InputPayload = {
  operator: "+" | "-";
  description: string;
  amount: string;
};
  const dispatch = useDispatch();

  const [inputFormData, setInputFormData] = useState<InputFormData>({
    operator: "",
    description: "",
    amount: "",
  });

  // Input chnage handle
function handleFormChange(
  e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
) {
  const { id, value } = e.target;
  setInputFormData((prev) => ({
    ...prev,
    [id]: value,
  }));
}

function submitHandle(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();

  const { operator, description, amount } = inputFormData;

  // ✅ Runtime check
  if (operator === "") return; // operator not selected yet

  // ✅ Tell TS explicitly: this object is InputPayload
  const payload: InputPayload = {
    operator, // TS now knows operator is "+" | "-"
    description,
    amount,
  };

  dispatch(handleInputFormDatas(payload));

  // Reset form
  setInputFormData({
    operator: "",
    description: "",
    amount: "",
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
