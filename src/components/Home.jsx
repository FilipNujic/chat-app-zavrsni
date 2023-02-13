import React from "react";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import Navbar from "./Navbar";

const style = {
  appContainer: `w-full mx-auto text-center flex flex-row`,
  sectionContainer: `flex flex-col h-screen w-screen min-w-[10rem] bg-gray-100 relative overflow-hidden`,
  currentUsersContainer: `flex flex-col h-screen w-[30%] max-w-[18rem] bg-secondary-100 shadow-xl`,
};

const Home = () => {
  return (
    <div className={style.appContainer}>
      <section className={style.currentUsersContainer}>
        <Sidebar />
      </section>
      <section className={style.sectionContainer}>
        <Navbar />
        <Chat />
      </section>
    </div>
  );
};

export default Home;
