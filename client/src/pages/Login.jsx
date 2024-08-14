import { useState } from "react";
import Header from "../components/Header";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [auth, setAuth] = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch(`http://localhost:8000/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      let response = await res.json();
      if (response.success) {
        alert("login successfully");
        // console.log(response.token);

        localStorage.setItem("auth", JSON.stringify(response.token));
        setAuth({
          ...auth,
          token: response.token,
        });
        setEmail("");
        setPassword("");
        navigate("/dashboard");
      } else {
        alert(response.message);
      }
    } catch (err) {
      console.log(err);
      return false;
    }
  };

  return (
    <>
      <Header />
      <div className="container mt-5">
        <div className="row">
          <div className="col-6">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>

              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
