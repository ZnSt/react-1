import { useState, useEffect } from "react";

export const SignupForm = () => {
  const [email, setEmail] = useState(JSON.parse(window.localStorage.getItem("email")) ?? "");
  const [password, setPassword] = useState(
    JSON.parse(window.localStorage.getItem("password")) ?? ""
  );

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

  useEffect(() => {
    window.localStorage.setItem("email", JSON.stringify(email));
  }, [email]);

  useEffect(() => {
    window.localStorage.setItem("password", JSON.stringify(password));
  }, [password]);

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
