import React from "react";
import Review from "./Review";
import { AiOutlineGithub } from "react-icons/ai";

function App() {
  return (
    <main>
      <section className="container">
        <h2>
          Our Reviews <AiOutlineGithub />
        </h2>
        <Review />
      </section>
    </main>
  );
}

export default App;
