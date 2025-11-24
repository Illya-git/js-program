import React from "react";
import { useGlobalContext } from "./context";

const Home = () => {
  const { openSideBar, openModal } = useGlobalContext();

  return (
    <main>
      <button className="sidebar-toggle" onClick={openSideBar}>
        open sidebar
      </button>

      <button className="btn" onClick={openModal}>
        open modal
      </button>
    </main>
  );
};

export default Home;
