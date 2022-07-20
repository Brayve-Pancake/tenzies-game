export default function RollCounter(props) {
  return (
    <div>
      <h1>Current Score: {props.count}</h1>
      <h2>Best Score: {props.bestScore}</h2>
    </div>
  );
}
