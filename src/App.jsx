import { createContext, useState } from "react";
import Counter from "./pages/Counter";
import LongForm from "./pages/LongForm";

// export const COUNTER_CONTEXT = createContext();

function App() {
  const [count, setCount] = useState(0);
  const counterValue = { count, setCount };
  return (
    // <COUNTER_CONTEXT.Provider value={counterValue}>
    // </COUNTER_CONTEXT.Provider>
    <div >
      {/* <Counter /> */}
      <LongForm />
    </div>
  );
}

export default App;
