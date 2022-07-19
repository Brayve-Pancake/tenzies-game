import Button from "./components/Button";
import Content from "./components/Content";
import Die from "./components/Die";

export default function App() {
  // const [dice, setDice] = useState([]);

  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(Math.floor(Math.random() * 6) + 1);
    }
    console.log(newDice[0]);
  }

  return (
    <div className="board">
      <Content />
      <div className="die--container">
        <Die value="1" />
        <Die value="1" />
        <Die value="1" />
        <Die value="1" />
        <Die value="1" />
        <Die value="1" />
        <Die value="1" />
        <Die value="1" />
        <Die value="1" />
        <Die value="1" />
      </div>
      <Button allNewDice={allNewDice} />
    </div>
  );
}
