import { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("login!")
    // Submit the form data to the server
  }
  return (
    <div className="login-form-cont">
      <form className="login-form" onSubmit={(event) => handleSubmit(event)}>
        <label>
          Username:
          <input type="text" value={username} onChange={handleUsernameChange} />
        </label>
        <label>
          Password:
          <input type="text" value={password} onChange={handlePasswordChange} />
        </label>
        <br />
        <input type="submit" value="Login" />
      </form>
    </div>
  )
}
