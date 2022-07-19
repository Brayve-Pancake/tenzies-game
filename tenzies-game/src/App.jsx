import Button from "./components/Button";
import Content from "./components/Content";
import Die from "./components/Die";

export default function App() {
  return (
    <div className="board">
      <Content />
      <div className="die--container">
        <Die value="1" />
        <Die value="2" />
        <Die value="3" />
        <Die value="4" />
        <Die value="5" />
        <Die value="6" />
        <Die value="1" />
        <Die value="2" />
        <Die value="3" />
        <Die value="4" />
      </div>
      <Button />
    </div>
  );
}
