import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import people from "./data";

function App() {
  const [index, setIndex] = useState(0);
  const [personList, setPersonList] = useState(people);

  //  Перевірка меж
  useEffect(() => {
    const lastIndex = personList.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, personList]);

  //  Автоматична прокрутка
  useEffect(() => {
    let slider = setInterval(() => {
      setIndex((prevIndex) => prevIndex + 1);
    }, 2000);
    return () => clearInterval(slider);
  }, [index]);

  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span> Наші відгуки
        </h2>
      </div>
      <div className="section-center">
        {personList.map((person, personIndex) => {
          const { id, image, name, title, quote } = person;

          
          let position = "nextSlide";
          if (personIndex === index) {
            position = "activeSlide";
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === personList.length - 1)
          ) {
            position = "lastSlide";
          }

          return (
            <article className={position} key={id}>
              <img src={image} alt={name} className="person-img" />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          );
        })}

        {/*  Самостійно реалізовані кнопки */}
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <FaChevronLeft />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
}

export default App;
