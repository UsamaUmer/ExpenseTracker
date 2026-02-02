import "./App.css";
import InputScreen from "./Components/InputScreen";
import OutputScreen from "./Components/OutputScreen";
import TransactionHistory from "./Components/TransactionHistory";

function App() {
  return (
    <>
      <OutputScreen></OutputScreen>
      <InputScreen></InputScreen>
      <TransactionHistory></TransactionHistory>
    </>
  );
}

export default App;
