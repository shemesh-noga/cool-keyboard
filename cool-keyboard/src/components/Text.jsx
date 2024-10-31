function Text(props) {
  return (
    <>
      <h1 style={{ fontSize: props.fontSize }}>{props.textString}</h1>
    </>
  );
}

export default Text;
