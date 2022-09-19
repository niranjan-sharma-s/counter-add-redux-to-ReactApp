import React, { useState } from "react";
import "./counter.css";
const Counter = () => {
  const [count, setCount] = useState(0);

  const updateCount = (action) => {
    if (action === "increase" && count >= 0) {
      setCount(count + 1);
    }
    if (action === "decrease" && count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="countWrapper">
      {count}
      {
        <div>
          <span>
            {" "}
            <button id="increase" onClick={() => updateCount("increase")}>
              {" "}
              Increase
            </button>{" "}
          </span>{" "}
          <span>
            <button id="decrease" onClick={() => updateCount("decrease")}>
              Decrease
            </button>
          </span>
        </div>
      }
    </div>
  );
};

export default Counter;
