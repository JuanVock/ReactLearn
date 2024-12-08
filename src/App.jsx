import "./App.css";
import NumberGuesser from "./NumberGuesser.jsx";
import Navbar from "./Navbar.jsx";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Wordle from "./WordleGame.jsx";

function App() {
  return (
    <>
      <NumberGuesser></NumberGuesser>
    </>
  );
}

export default App;
