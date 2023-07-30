import "./button.css";

function ButtonComponent(props) {
  /* { colorFondo: "red", label: "Boton"} */
  // destructuring
  const { children, colorFondo } = props;

  const styleButton = {
    backgroundColor: colorFondo,
  };

  return (
    <>
      <button onClick={props.onClick} style={styleButton} className="btn">
        {children}
      </button>
    </>
  );
}

export default ButtonComponent;
