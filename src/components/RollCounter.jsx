export default function RollCounter(props) {
  return (
    <div className="rollCounter">
      <h3>Current Score: {props.count}</h3>
      <h4>Best Score: {props.bestScore}</h4>
    </div>
  );
}
