import { useState } from "react";
import { nanoid } from "nanoid";
import Content from "./components/Content";
import Die from "./components/Die";
import { useEffect } from "react";
import Confetti from "react-confetti";

export default function App() {
  const [dice, setDice] = useState(createAllNewDice());
  const [tenzies, setTenzies] = useState(false);

  useEffect(() => {
    const allOnHold = dice.every((die) => die.onHold === true);
    const winningValue = dice[0].value;
    const allWinningValue = dice.every((die) => die.value === winningValue);
    if (allOnHold && allWinningValue) {
      setTenzies(true);
      console.log("you won");
    }
  }, [dice]);

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
    setDice((prevDice) =>
      prevDice.map((die) => {
        return die.onHold ? die : genNewDie();
      })
    );
  }
  // Check to see if die.onHold == true.
  // if true, then

  // map through the dice array, this callback function will return a new array
  // each element of that array should be a die object, wi

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
  }

  return (
    <div className="board">
      <Content />
      {tenzies && <Confetti />}
      <div className="die--container">{newDiceArray}</div>
      <button className="button--roll" onClick={tenzies ? resetGame : rollDice}>
        {tenzies ? "New Game" : "Roll"}
      </button>
    </div>
  );
}
