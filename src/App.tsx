import { BrowserRouter } from "react-router-dom";
import "./App.css";
import TopBarNavigation from "./components/TopBarNavigation";

function App() {
  return (
    <>
      <BrowserRouter>
        <TopBarNavigation />
      </BrowserRouter>
    </>
  );
}

export default App;
