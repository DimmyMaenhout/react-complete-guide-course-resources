import { useRef, useState } from "react";

export default function Login() {
  const [emailIsInvalid, setEmailIsInvalid] = useState(false);

  // deze methode heeft doorgaans minder code nodig dan state, het nadeel van deze methode is dat het resetten van de values moeilijker is en als de form complex is ga je nog veel refs hebt
  const email = useRef();
  const password = useRef();

  function handleSubmit(event) {
    event.preventDefault(); // prevents the default browser behaviour which would be to generate and send this HTTP request

    const enteredEmail = email.current.value;
    const enteredPassword = password.current.value;
    console.log(enteredEmail, enteredPassword);

    const emailIsValid = enteredEmail.includes("@");

    if (!emailIsValid) {
      setEmailIsInvalid(true);
      return;
    }

    setEmailIsInvalid(false);

    console.log("Sending HTTP request ...");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>{" "}
          {/* htmlFor is voorzien door react, zelfde reden als bij className ipv class*/}
          <input id="email" type="email" name="email" ref={email} />
          <div className="control-error">
            {emailIsInvalid && <p>Please enter a valid email</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" ref={password} />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">
          {/* type van button zetten als "button" submit de form niet, type="submit" is de default value */}
          Login
        </button>
      </p>
    </form>
  );
}
