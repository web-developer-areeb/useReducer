import { useReducer } from "react";

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const VALUE_TO_ADD = 'VALUE_TO_ADD';
const ADD_VALUE = 'ADD_VALUE';

const reducer = (state, action) => {
  switch(action.type) {
    case INCREMENT:
      return {...state, count: state.count + 1}
    case DECREMENT:
      return {...state, count: state.count - 1}
    case VALUE_TO_ADD:
      return {...state, valueToAdd: action.payload}
    case ADD_VALUE:
      return {...state, count: state.count+state.valueToAdd}
  }
}

const CounterForm = () => {
  const [state, dispatch] = useReducer(reducer, {
    count: 0, 
    valueToAdd: 0
  })


  return (
    <div className="ml-20 mt-20">
      <p className="mb-10">
        Value of counter is <span>{state.count}</span>
      </p>
      <button
        className="mb-3 bg-emerald-500 text-white px-5 py-2 rounded"
        onClick={() => dispatch({type: INCREMENT})}
      >
        Increment
      </button>
      <button
        className="ml-3 mb-3 bg-emerald-500 text-white px-5 py-2 rounded"
        onClick={() => dispatch({type: DECREMENT})}
      >
        Decrement
      </button>
      <label className="mb-5 block">Add a lot</label>
      <input
        type="number"
        value={state.valueToAdd || ''}
        onChange={(e) => dispatch({type: VALUE_TO_ADD, payload: +e.target.value})}
        className="mb-5 block border p-2"
      />
      <button
        onClick={() => dispatch({type: ADD_VALUE})}
        className="bg-emerald-500 text-white px-5 py-2 rounded"
      >
        Add it
      </button>
    </div>
  );
};

export default CounterForm;
