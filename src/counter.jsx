import { useState } from "react";
import PropTypes from 'prop-types';

const Counter = ({ title = "Winis Condition Counter" }) => {
  const [count, setCount] = useState(0);

  const incrementCount = () => setCount((prev) => prev + 1);
  const decrementCount = () => setCount((prev) => prev - 1);

  return (
    <div className="mt-5 px-3 py-4">
      <h1 className="h1 display-1">{title}</h1>
      <h2 className="h1 display-1 mt-5 mb-3">{count}</h2>
      <div className="mt-5">
        <button
          className="btn btn-primary btn-lg mx-3 px-5 py-3 mt-2"
          onClick={incrementCount}
        >
          Add
        </button>
        <button
          className="btn btn-dark btn-lg mx-3 px-5 py-3 mt-2"
          onClick={decrementCount}
        >
          Subtract
        </button>
      </div>
    </div>
  );
};

Counter.propTypes = {
  title: PropTypes.string
};

export default Counter;
