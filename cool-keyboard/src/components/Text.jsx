function Text(props) {
  return (
    <>
      <h1 id="text" key={props.thiKey}>
        {props.textString}
      </h1>
    </>
  );
}

export default Text;
