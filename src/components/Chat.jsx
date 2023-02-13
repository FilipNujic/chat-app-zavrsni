import React, { useState, useEffect } from "react";
import Message from "./Message";
import SendMessage from "./SendMessage";
import { db } from "../firebase";
import {query, collection, orderBy, onSnapshot} from "firebase/firestore"


const style = {
  main: `flex flex-col p-4 relative overflow-y-auto h-[86%]`,
};

const Chat = () => {
  const [ messages, setMessages ] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("timestamp"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });
    return () => unsubscribe();
  }, []);

  return (
    <>
      <main className={style.main}>
        {messages && messages.map((message) => (
          <Message key={message.id} message={message}/>
        ))}
      </main>
      {/*Send message component*/}
      <SendMessage/>
    </>
  );
};

export default Chat;
