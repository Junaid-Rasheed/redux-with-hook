import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const Counter = () => {
  //const [count, setCount] = useState(0);
  const [value, setValue] = useState(0);
  const dispatch = useDispatch();
  const count = useSelector((state) => {
    return state.count;
  });
  return (
    <>
      <div>Counter : {count}</div>
      <div>
        <button
          onClick={() => {
            // setCount(count + 1);
            dispatch({ type: "INCREMENT" });
          }}
        >
          increment
        </button>

        <br />

        <button
          onClick={() => {
            //setCount(count - 1);
            dispatch({ type: "DECREMENT" });
          }}
        >
          diccrement
        </button>

        <br />
        <input
          type="text"
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />

        <br />

        <button
          onClick={() => {
            // setCount(count + Number(value));
            dispatch({ type: "INCREMENT_BY_VALUE", payload: Number(value) });
          }}
        >
        Action by input value
        </button>


        <br />
        <button 
        onClick={()=>
        {
          dispatch({type:"RESET"})
        }}
        >
          Reset
        </button>
      </div>
    </>
  );
};
