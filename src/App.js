import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Signin from "./Signin";
import Signup from "./Signup";
import Task1 from "./Task1";

function App() {
  return (
    <div className="App">
      <Task1 />
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </div>
  );
}

export default App;
