function Text(props) {
  return (
    <>
      <h1 id="text" key={props.thisKey}>
        {props.textString}
      </h1>
    </>
  );
}

export default Text;
