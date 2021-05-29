import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase } from './counterSlice';

CounterFeature.propTypes = {};

function CounterFeature(props) {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  const handleIncreaseClick = () => {
    const action = increase();
    dispatch(action);
  };
  const handleDecreaseClick = () => {
    const action = decrease();
    dispatch(action);
  };
  return (
    <div>
      {count}
      <button onClick={handleIncreaseClick}>Increase</button>
      <button onClick={handleDecreaseClick}>Decrease</button>
    </div>
  );
}

export default CounterFeature;
