import { useState, useEffect } from "react";

function Card() {
  const [advice, setAdvice] = useState("");

  const fetchAdvice = async () => {
    try {
      const response = await fetch("https://api.adviceslip.com/advice");
      const data = await response.json();
      // console.log(data.slip);
      setAdvice(data.slip);
    } catch (error) {
      throw new Error("Something went wrong in fetching data!");
    }
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <div className="container">
      <div className="card">
        <p className="advice__id">ADVICE {`#${advice.id}`}</p>
        <p className="advice">"{advice.advice}"</p>
        <img src={"assets/pattern-divider-desktop.svg"} alt="Divider" />
        <div className="dice">
          <img src={"assets/icon-dice.svg"} alt="Icon" />
        </div>
      </div>
    </div>
  );
}
export default Card;
