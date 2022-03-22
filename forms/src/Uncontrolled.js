import "./App.css";
import { useRef } from "react";

function Uncontrolled() {
  const input = useRef();
  const file = useRef();
  const submit = () => {
    console.log(file.current.files[0]);
    const form = new FormData();
    form.append("archico", file.current.files[0]);
    form.append("campo", input.current.value);
    fetch("/lala", { method: "POST", body: form });
  };

  return (
    <div className="App">
      <div>
        <div>
          <span>Chachito happy</span>
          <input type="text" ref={input} name="campo" />
          <input type="file" ref={file} />
        </div>
        <input type="submit" value="Enviar" onClick={submit} />
      </div>
    </div>
  );
}

export default Uncontrolled;
