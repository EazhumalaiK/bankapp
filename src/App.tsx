import { BrowserRouter } from "react-router-dom";
import "./App.css";
import TopBarNavigation from "./components/TopBarNavigation";

import { MyContext } from "./context/MyContext";
import { useState } from "react";

function App() {
  const [text, setText] = useState<string>("");
  return (
    <>
      <BrowserRouter>
        <MyContext.Provider value={{ text, setText }}>
          <TopBarNavigation />
        </MyContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
