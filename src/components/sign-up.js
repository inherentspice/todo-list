import { useState } from "react";

export default function SignUp( {handleUserSignUp} ) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }


  return (
    <div className="login-form-cont">
      <h2>Make an account!</h2>
      <form className="login-form" onSubmit={event => handleUserSignUp(event, username, password)}>
        <label>
          Username:
          <input type="text" value={username} onChange={handleUsernameChange} />
        </label>
        <label>
          Password:
          <input type="text" value={password} onChange={handlePasswordChange} />
        </label>
        <br />
        <input type="submit" value="Sign Up!" />
      </form>
    </div>
  )
}
