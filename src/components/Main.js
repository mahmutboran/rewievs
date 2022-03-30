import React, { useState } from "react";

import { ReactComponent as NextIcon } from "../svgs/next.svg";
import { ReactComponent as PrevIcon } from "../svgs/pre.svg";
import { ReactComponent as QuoteIcon } from "../svgs/quote.svg";
import { Data } from "./Data";

const Main = () => {
  const [data, setData] = useState(Data);
  const [index, setIndex] = useState(0);
  const { name, job, description, img } = data[index]

  console.log(data);

  const checkIndex = (newIndex) => {
    if (newIndex > data.length - 1) { return 0 }
    else if (newIndex < 0) { return data.length - 1 }
    return newIndex
  }

  const prewPerson = () => {
    setIndex((index) => {
      //const newIndex = index - 1;
      return checkIndex(index - 1)
    });
  };
  const nextPerson = () => {
    setIndex((index) => {
      //const newIndex = index + 1;
      return checkIndex(index + 1)
    });
    console.log(index);
  };

  const handleClick = () => {
    const randomNum = Math.floor(Math.random() * (data.length))
    console.log(randomNum)
    setIndex(randomNum)
  }

  return (
    <div className="container">
      <h1 className="fw-bold">Our Reviews</h1>
      <div className="container underline"></div>
      <div className="review ">
        <div className="img-container">
          <img src={img} alt="resim" />
          <span className="quote-icon"> 

          <QuoteIcon/>
          </span>

        </div>

        <div>
          <h4 className="name">{name}</h4>
          <p className="jobTitle">{job}</p>
          <p className="description">{description}</p>
        </div>
        <div className="icons">
          <button className="icon" onClick={prewPerson}>
            <PrevIcon />
          </button>
          <button className="icon"  onClick={nextPerson}>
            <NextIcon />
          </button>
        </div>
        <button className="surprise" onClick={handleClick}>Suprise Me</button>
      </div>
    </div>
  );
};

export default Main;
