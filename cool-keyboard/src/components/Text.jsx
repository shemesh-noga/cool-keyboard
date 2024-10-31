function Text(props) {
  return (
    <>
      <h1 key={props.thiKey}>{props.textString}</h1>
    </>
  );
}

export default Text;
