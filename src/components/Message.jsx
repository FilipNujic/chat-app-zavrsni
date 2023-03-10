import React, { useEffect, useRef } from "react";
import { auth } from "../firebase";

const style = {
  message: `flex items-center shadow-xl m-4 py-4 px-8 sm:rounded-bl-full sm:rounded-br-full`,
  name: `absolute inset-x-0 top-0 mt-[-1rem] text-accent-100 text-xl truncate`,
  sent: `bg-accent-200 text-black flex-row-reverse text-end float-right max-w-full rounded-[60px] rounded-tr-none sm:rounded-tl-full`,
  received: `bg-secondary-100 text-black text-start float-left max-w-full rounded-[60px] rounded-tl-none sm:rounded-tr-full`,
};

const Message = ({ message }) => {
  const scroll = useRef();

  useEffect(() => {
    scroll.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  const messageType =
    message.uid === auth.currentUser.uid
      ? `${style.sent}`
      : `${style.received}`;
  return (
    <div className="relative" ref={scroll}>
      <div className={`${style.message} ${messageType}`}>
        <p className={style.name}>{message.name}</p>
        <p className="text-start overflow-hidden text-ellipsis break-words">{message.text}</p>
      </div>
    </div>
  );
};

export default Message;
