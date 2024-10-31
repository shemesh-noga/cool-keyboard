function Letter(props) {
  return (
    <span key={props.thisKey} style={props.style}>
      {props.value}
    </span>
  );
}

export default Letter;
