import React from "react";
import { useState } from "react";
import { db } from "../firebase";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { useEffect } from "react";
import User from "./User";

const style = {
  nav: `bg-accent-300 h-20 flex justify-between items-center p-4`,
  userList: `bg-secondary-100`,
  heading: `text-white text-2xl`,
};

const Sidebar = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "users"), where("status", "==", "online"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let users = [];
      querySnapshot.forEach((doc) => {
        users.push({ ...doc.data(), id: doc.id });
      });
      setUsers(users);
    });
    return () => unsubscribe();
  }, []);
  return (
    <>
      <div className={style.nav}>
        <h1 className={style.heading}>Current users:</h1>
      </div>
      <div className={style.userList}>
        {users && users.map((user) => <User key={user.id} user={user} />)}
      </div>
    </>
  );
};

export default Sidebar;
