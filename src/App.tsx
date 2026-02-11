import "./App.css";
import InputScreen from "./Components/InputScreen";
import OutputScreen from "./Components/OutputScreen";
import TransactionHistory from "./Components/TransactionHistory";

function App() {
  return (
    <>
      <OutputScreen />
      <InputScreen />
      <TransactionHistory />
    </>
  );
}

export default App;


// import type { ReactElement } from "react";
// import "./App.css";
// import InputScreen from "./Components/InputScreen";
// import OutputScreen from "./Components/OutputScreen";
// import TransactionHistory from "./Components/TransactionHistory";

// function App(): ReactElement {
//   return (
//     <>
//       <OutputScreen />
//       <InputScreen />
//       <TransactionHistory />
//     </>
//   );
// }

// export default App;

