import { useState } from "react";

export const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "email":
        setEmail(value);
        break;

      case "password":
        setPassword(value);
        break;

      default:
        return;
    }
  };
  return (
    <form>
      <label>
        <span>Mail</span>
        <input type="email" name="email" value={email} onChange={handleChange} />
      </label>
      <label>
        <span>Password</span>
        <input type="password" name="password" value={password} onChange={handleChange} />
      </label>
      <button>Sign Up</button>
    </form>
  );
};