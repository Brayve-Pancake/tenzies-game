import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";
import Content from "./components/Content";
import RollCounter from "./components/RollCounter";
import Die from "./components/Die";

export default function App() {
  const [dice, setDice] = useState(createAllNewDice());
  const [tenzies, setTenzies] = useState(false);
  const [count, setCount] = useState(0);
  const [bestScore, setBestScore] = useState(
    JSON.parse(localStorage.getItem("bestScore")) || []
  );
  // [] stops localStorage returning "undefined"    ^^^^

  useEffect(() => {
    const allOnHold = dice.every((die) => die.onHold === true);
    const winningValue = dice[0].value;
    const allWinningValue = dice.every((die) => die.value === winningValue);

    if (allOnHold && allWinningValue) {
      setTenzies(true);
      // Check for new bestScore
      if (count < bestScore || bestScore.length === 0) {
        setBestScore(count);
        // Second useEffect() must be used, localStorage.setItem will use old data
      }
      console.log("you won");
    }
  }, [dice]);

  useEffect(() => {
    localStorage.setItem("bestScore", JSON.stringify(bestScore));
  }, [bestScore]);

  function createAllNewDice() {
    const tempDice = [];
    for (let i = 0; i < 10; i++) {
      tempDice.push(genNewDie());
    }
    return tempDice;
  }

  function genNewDie() {
    return {
      value: Math.floor(Math.random() * 6) + 1,
      onHold: false,
      id: nanoid(),
    };
  }

  function rollDice() {
    setCount((prevCount) => prevCount + 1);
    setDice((prevDice) =>
      prevDice.map((die) => {
        return die.onHold ? die : genNewDie();
      })
    );
  }

  function holdDice(id) {
    setDice((prevDice) =>
      prevDice.map((die) => {
        // return an object with the prevData + edit or the prevData.
        return die.id === id ? { ...die, onHold: !die.onHold } : die;
      })
    );
  }

  const newDiceArray = dice.map((die) => (
    <Die
      value={die.value}
      key={die.id}
      onHold={die.onHold}
      holdDice={() => holdDice(die.id)}
    />
  ));

  function resetGame() {
    console.log("winner");
    setDice(createAllNewDice);
    setTenzies(false);
    setCount(0);
  }

  return (
    <div className="board">
      <RollCounter count={count} bestScore={bestScore} />
      <Content />
      {tenzies && <Confetti />}
      <div className="die--container">{newDiceArray}</div>
      <button className="button--roll" onClick={tenzies ? resetGame : rollDice}>
        {tenzies ? "New Game" : "Roll"}
      </button>
    </div>
  );
}
