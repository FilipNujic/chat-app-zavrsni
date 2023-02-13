import React from "react";
import { auth, db } from "../firebase";
import { signOut } from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";

const style = {
  button: `rounded-md bg-accent-300 px-8 py-3 hover:bg-gray-700`,
};

const Logout = () => {
  const updateStatus = async () => {
    await updateDoc(doc(db,"users",auth.currentUser.uid), {
      status: "offline"
    }).then(()=>signOut(auth));
  }
  return (
    <button onClick={() => {updateStatus()}} className={style.button}>
      <span className="text-white">Logout</span>
    </button>
  );
};

export default Logout;
