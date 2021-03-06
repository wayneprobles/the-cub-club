import { useState } from "react";
import { registerUser } from "../../services";
import { useHistory } from "react-router-dom";
import homeImage from "../../assets/home-asset.png";
const Signup = (props) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [confirmPw, setConfirmPw] = useState("");
  const history = useHistory();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const userInfo = {
        username,
        email,
        password,
      };
      const user = await registerUser(userInfo);
      props.setUser(user);
    } catch (e) {
      console.error(e.message);
    }
  };

  return (
    <section className="screen">
      <div id="register-screen-contents">
        <h1 className="logo">THE CUB CLUB</h1>
        <div className="inner-content">
          <h3 className="heading">Create an account!</h3>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="password">Password:</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {/* <label htmlFor="confirmPassword">Confirm Password:</label>
          <input id="confirmPassword" type="password" value={confirmPw} onChange={(e) => setConfirmPw(e.target.value)}/> */}
            <button className="form-button" type="submit">
              Sign up
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Signup;
