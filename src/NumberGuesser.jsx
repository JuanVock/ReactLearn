import React, { useState, useEffect } from "react";
import Header from "./Header.jsx";

const NumberGuesser = () => {
  const [userInput, setUserInput] = useState(null);
  const [hint, setHint] = useState("");
  const [randomNumber, setRadomNumber] = useState(null);
  const [tries, setTry] = useState(null);
  const [restartOk, setRestartOk] = useState(false);

  useEffect(() => {
    setRadomNumber(Math.floor(Math.random() * 100) + 1);
  }, []);

  const btnOkClick = () => {
    console.log(randomNumber);
    if (userInput > randomNumber) {
      setHint("Deine Zahl ist zu gross!");
    } else if (userInput < randomNumber) {
      setHint("Deine Zahl ist zu klein!");
    } else {
      setHint("Du hast die Zahl erraten!");
      setRestartOk(true);
    }
    setTry(tries + 1);
  };

  const btnRestart = () => {
    setRadomNumber(Math.floor(Math.random() * 100) + 1);
    setRestartOk(false);
    setTry(0);
    setHint("Neues Spiel angefangen!");
    setUserInput("");
  };

  return (
    <>
      <Header></Header>

      <p>Your goal is to guess the number. Good luck!</p>
      <input
        value={userInput}
        onChange={(e) => {
          setUserInput(e.target.value);
        }}
        type="number"
        disabled={restartOk}
      />
      <br />
      <button onClick={() => btnOkClick()} disabled={restartOk}>
        OK
      </button>
      <p>Deine Versuche: {tries}</p>
      <p>{hint}</p>
      {restartOk && <button onClick={() => btnRestart()}>Restart</button>}
    </>
  );
};

export default NumberGuesser;
