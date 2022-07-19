import { useState } from "react";
import Content from "./components/Content";
import Die from "./components/Die";

export default function App() {
  const [dice, setDice] = useState(allNewDice());
  console.log(dice);

  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(Math.floor(Math.random() * 6) + 1);
    }
    return newDice;
  }

  function rollDice() {
    setDice(allNewDice());
  }

  const newDiceArray = dice.map((die) => <Die value={die} />);

  return (
    <div className="board">
      <Content />
      <div className="die--container">{newDiceArray}</div>
      <button className="button--roll" onClick={rollDice}>
        Roll
      </button>
    </div>
  );
}
