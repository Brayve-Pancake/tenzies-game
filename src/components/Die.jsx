export default function Die(props) {
  const styles = { backgroundColor: props.onHold ? "#59E391" : "#FFFFFF" };
  return (
    <button className="die" style={styles} onClick={props.holdDice}>
      {props.value}
    </button>
  );
}
