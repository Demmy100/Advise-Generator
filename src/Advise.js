import React, { useEffect, useState } from "react";
import Dice from "./images/icon-dice.svg";
import Divider from "./images/pattern-divider-desktop.svg";
import axios from "axios";

const Advise = () => {
  const [advice, setAdvice] = useState(null);
  const fetchData = async () => {
    const url = "https://api.adviceslip.com/advice";
    const data = await axios.get(`${url}?timestamp=${new Date().getTime()}`);
    setAdvice(data.data.slip);
  };
  useEffect(() => {
    setAdvice({
      id: "221",
      advice: `Share positive energy.`,
    });
  }, []);
  return (
    <div className="advise">
      <div className="container">
        <h3>
          Advise #{advice && advice.id}
        </h3>
        <p style={{ textAlign: "center", paddingInline: "20px" }}>
          "{advice && advice.advice}"
        </p>
        <img
          src={Divider}
          alt="divider"
          className="image"
          style={{ marginTop: "10px", marginBottom: "20px" }}
        />
        <button onClick={() => fetchData()}>
          <img src={Dice} alt="dice" onClick={() => fetchData()} />
        </button>
      </div>
    </div>
  );
};

export default Advise;
