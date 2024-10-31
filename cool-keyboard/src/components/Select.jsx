export default function Select(props) {
  return (
    <>
      <label htmlFor={props.id}>
        {props.label}
        <select name={props.type} id={props.id} onChange={props.onChange}>
          {props.optionsArr.map((font) => (
            <option style={{ fontFamily: font }} value={font}>
              {font}
            </option>
          ))}
        </select>
      </label>
    </>
  );
}
