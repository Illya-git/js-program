import React, { useState } from "react";
import data from "./data";
import Question from "./Question";

function App() {
  const [questions, setQuestions] = useState(data);

  return (
    <main>
      <div className="container">
        <h3>Accordion Questions</h3>
        <section className="info">
          {questions.map((question) => (
            <Question key={question.id} {...question} />
          ))}
        </section>
      </div>
    </main>
  );
}

export default App;
