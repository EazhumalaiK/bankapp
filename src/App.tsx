import { BrowserRouter } from "react-router-dom";
import "./App.css";
import TopBarNavigation from "./components/TopBarNavigation";

import AllContext from "./context/AllContext";

function App() {
  return (
    <>
      <BrowserRouter>
        <AllContext>
          <TopBarNavigation />
        </AllContext>
      </BrowserRouter>
    </>
  );
}

export default App;
