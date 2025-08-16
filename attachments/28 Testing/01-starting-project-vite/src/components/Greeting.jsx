import { useState } from "react";
import Output from "./Output";

const Greeting = () => {
  const [changdText, setChangedText] = useState(false);

  const changeTextHandler = () => {
    setChangedText(true);
  };

  return (
    <div>
      <h2>Hello World!</h2>
      {!changdText && <Output>It's good to see you!</Output>}
      {changdText && <Output>Changed!</Output>}
      <button onClick={changeTextHandler}>Change Text!</button>
    </div>
  );
};

export default Greeting;
