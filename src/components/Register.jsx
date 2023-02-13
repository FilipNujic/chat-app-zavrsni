import React from "react";
import { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "../firebase";
import { useNavigate, Link } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";

const style = {
  formContainer: `bg-primary-100 h-[100vh] flex align items-center justify-center`,
  formWrapper: `flex flex-col bg-secondary-100 py-8 px-24 rounded-xl gap-2 items-center`,
  formStyle: `flex flex-col gap-2`,
  inputStyle: `p-4 w-[250px]`,
  buttonStyle: `bg-accent-200 text-white-100 p-3 font-bold border-none`,
};

const Register = () => {
  const [err, setErr] = useState(false);
  const [errMessage, setErrMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const passwordConfirm = e.target[3].value;

    if (password===passwordConfirm)
    {
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(response.user, {
        displayName,
      });
      await setDoc(doc(db, "users", response.user.uid), {
        uid: response.user.uid,
        displayName,
        email,
        status: "online",
      });
      navigate("/");
    } catch (err) {
      setErr(true);
      setErrMessage('Email is already in use.');
    }
  }
  else {
    setErr(true);
    setErrMessage('Passwords do not match.');
  }
  };

  return (
    <div className={style.formContainer}>
      <div className={style.formWrapper}>
        <span className="text-xl font-bold">Chat App</span>
        <span className="text-lg">Register</span>
        <form onSubmit={handleSubmit} className={style.formStyle}>
          <input
            className={style.inputStyle}
            type="text"
            placeholder="Username"
            maxLength={25}
            required
          ></input>
          <input
            className={style.inputStyle}
            type="email"
            placeholder="Email"
            required
          ></input>
          <input
            className={style.inputStyle}
            type="password"
            placeholder="Password"
            required
          ></input>
          <input
            className={style.inputStyle}
            type="password"
            placeholder="Confirm Password"
            required
          ></input>
          <button className={style.buttonStyle}>Sign up</button>
          {err && <span className="text-red-500 text-center">{errMessage}</span>}
        </form>
        <p className="text-accent-100 text-lg mt-3">
          Already have an account? <Link to="/login"><span className="text-primary-100">Login</span></Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
