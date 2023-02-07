import React, { useReducer } from "react";
import { initialState, reducer } from "../state/formReducer";

const LongForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const submit = (e) => {
    e.preventDefault();
    console.log(state);
  };
  return (
    <>
      <form onSubmit={submit}>
        <div>
          <label htmlFor="firstName">First Name: </label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            onBlur={(e) =>
              dispatch({
                type: "INPUT",
                payload: { name: e.target.name, value: e.target.value },
              })
            }
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name: </label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            onBlur={(e) =>
              dispatch({
                type: "INPUT",
                payload: { name: e.target.name, value: e.target.value },
              })
            }
          />
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            name="email"
            id="email"
            onBlur={(e) =>
              dispatch({
                type: "INPUT",
                payload: { name: e.target.name, value: e.target.value },
              })
            }
          />
        </div>
        <div>
          <label>Gender: </label>
          <input
            type="radio"
            name="gender"
            id="male"
            value="male"
            onClick={(e) =>
              dispatch({
                type: "INPUT",
                payload: { name: e.target.name, value: e.target.value },
              })
            }
          />
          <label for="male">Male</label>
          <input
            type="radio"
            name="gender"
            id="female"
            value="female"
            onClick={(e) =>
              dispatch({
                type: "INPUT",
                payload: { name: e.target.name, value: e.target.value },
              })
            }
          />
          <label for="other">Female</label>
          <input
            type="radio"
            name="gender"
            id="other"
            value="other"
            onClick={(e) =>
              dispatch({
                type: "INPUT",
                payload: { name: e.target.name, value: e.target.value },
              })
            }
          />
          <label for="other">Other</label>
        </div>
        <div>
          <label for="education">Education: </label>
          <select
            name="education"
            id="education"
            onClick={(e) =>
              dispatch({
                type: "INPUT",
                payload: { name: e.target.name, value: e.target.value },
              })
            }
          >
            <option value="SSC">SSC</option>
            <option value="HSC">HSC</option>
            <option value="Honours">Honours</option>
          </select>
        </div>
        <div>
          <label>Number of PCs: </label>
          <button onClick={() => dispatch({ type: "MINUS" })}>-</button>
          <span>{state.pcs}</span>
          <button onClick={() => dispatch({ type: "PLUS" })}>+</button>
        </div>
        <div>
          <label for="feedback">Feedback: </label> <br />
          <textarea
            name="feedback"
            id="feedback"
            cols="30"
            rows="10"
            onBlur={(e) =>
              dispatch({
                type: "INPUT",
                payload: { name: e.target.name, value: e.target.value },
              })
            }
          ></textarea>
        </div>
        <div>
          <input
            type="checkbox"
            name="term"
            id="terms"
            onClick={() =>
              dispatch({
                type: "TOGGLE",
              })
            }
          />
          <label for="terms">I agree terms and conditions</label>
        </div>
        <button type="submit" disabled={!state.term}>
          Submit
        </button>
      </form>
    </>
  );
};

export default LongForm;
