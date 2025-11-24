import React from "react";
import { useGlobalContext } from "./context";

const Navbar = () => {
  const { amount } = useGlobalContext();

  return (
    <nav>
      <div className="nav-center">
        <h3>useReducer</h3>
        <div className="nav-container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            className="shopping-cart"
          >
            <path d="M16 6H4l-2 8h16l-2-8zm-2 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <div className="total-amount">{amount}</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
