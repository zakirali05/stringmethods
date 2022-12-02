import Method from "./Method";
import Text from "./Text";
import Square from "./Square";
import { useState } from "react";
function App() {
  const [text, setText] = useState("");
  const [method, setMethod] = useState("");
  return (
    <div align="center" className="App pt-28  ">
      <Square text={text} method={method} />
      <Text text={text} setText={setText} />
      <Method method={method} setMethod={setMethod} />
    </div>
  );
}

export default App;
