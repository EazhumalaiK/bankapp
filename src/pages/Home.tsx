import { useContext } from "react";
import { MyContext } from "../context/MyContext";

const context = useContext(MyContext);

const Home = () => {
  if (!context) {
    throw new Error("MyComponent must be used within a MyContext.Provider");
  }
  const { text } = context;
  return <div>Welcome {text}</div>;
};

export default Home;
