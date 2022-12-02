import Method from "./Method";
import Text from "./Text";
import Square from "./Square";
import { useState } from "react";
function App() {
  const [text, setText] = useState("");
  return (
    <div align="center" className="App pt-28  ">
      <Square text={text} />
      <Text text={text} setText={setText} />
      <Method />
    </div>
  );
}

export default App;
