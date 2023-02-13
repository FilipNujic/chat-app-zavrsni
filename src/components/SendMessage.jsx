import React, { useState } from "react";
import { auth, db } from "../firebase";
import {addDoc, collection, serverTimestamp } from "firebase/firestore"

const style = {
  form: `h-14 w-full flex text-xl absolute bottom-0`,
  input: `w-full text-xl p-3 bg-accent-100 text-white outline-none border-none`,
  button: `w-[20%] bg-accent-200 hover:bg-blue-200`,
};

const SendMessage = () => {
  const [input, setInput] = useState('');

  const sendMessage = async (e) => {
    e.preventDefault();
    if (input === '') {
        return;
    }
    const {uid, displayName} = auth.currentUser
    await addDoc(collection(db, "messages"), {
        text: input,
        name: displayName,
        uid,
        timestamp: serverTimestamp()
    })
    setInput('');
  }

  return (
    <form onSubmit={sendMessage} className={style.form}>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className={style.input}
        type="text"
        placeholder="Message"
      ></input>
      <button className={style.button} type="submit">
        Send
      </button>
    </form>
  );
};

export default SendMessage;
