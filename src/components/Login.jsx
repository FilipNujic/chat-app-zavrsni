import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { auth, db } from "../firebase";
import { doc, updateDoc } from "firebase/firestore";

const style = {
  formContainer: `bg-primary-100 h-[100vh] flex align items-center justify-center`,
  formWrapper: `flex flex-col bg-secondary-100 py-8 px-20 rounded-xl gap-2 items-center`,
  formStyle: `flex flex-col gap-2`,
  inputStyle: `p-4 w-[250px]`,
  buttonStyle: `bg-accent-200 text-white-100 p-3 font-bold border-none`,
};

const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      await updateDoc(doc(db,"users",auth.currentUser.uid), {
        status: "online"
      });
      navigate("/");
    } catch (err) {
      setErr(true);
    }
  };
  return (
    <div className={style.formContainer}>
      <div className={style.formWrapper}>
        <span className="text-xl font-bold">Chat App</span>
        <span className="text-lg">Login</span>
        <form onSubmit={handleSubmit} className={style.formStyle}>
          <input
            className={style.inputStyle}
            type="email"
            placeholder="Email"
          ></input>
          <input
            className={style.inputStyle}
            type="password"
            placeholder="Password"
          ></input>
          <button className={style.buttonStyle}>Sign in</button>
          {err && <span className="text-red-500">Email and password do not match.</span>}
        </form>
        <p className="text-accent-100 text-lg mt-3">
          You do not have an account? <Link to="/register"><span className="text-primary-100">Register</span></Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
