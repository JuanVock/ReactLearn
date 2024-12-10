import React, { useState, useEffect } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

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
    setTry((prevTries) => (prevTries || 0) + 1); // Erhöhe die Versuche
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
      <Header />
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
          <p className="text-3xl font-bold text-center text-primary mb-6">
            Your goal is to guess the number. Good luck!
          </p>
          <input
            className="input input-bordered w-full mb-4"
            value={userInput}
            onChange={(e) => {
              setUserInput(e.target.value);
            }}
            type="number"
            disabled={restartOk}
          />
          <button
            className="btn btn-primary w-full mb-4"
            onClick={btnOkClick}
            disabled={restartOk}
          >
            OK
          </button>
          <p className="text-center mb-4">Deine Versuche: {tries}</p>
          <p className="text-center text-red-500">{hint}</p>
          {restartOk && (
            <button className="btn btn-secondary w-full" onClick={btnRestart}>
              Restart
            </button>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NumberGuesser;
