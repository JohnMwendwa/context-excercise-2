import { useReducer } from "react";
import classes from "./Form.module.css";
import { formReducer, initialFormState } from "../../reducers/form-reducer";

function Form() {
  const [formState, dispatch] = useReducer(formReducer, initialFormState);

  const formIsValid = formState.email.valid && formState.password.valid;

  function changeEmailHandler(event) {
    const value = event.target.value;
    dispatch({
      type: "EMAIL_CHANGED",
      payload: value,
    });
  }

  function changePasswordHandler(event) {
    const value = event.target.value;
    dispatch({
      type: "PASSWORD_CHANGED",
      payload: value,
    });
  }

  function submitFormHandler(event) {
    event.preventDefault();

    if (!formIsValid) {
      alert("Invalid form inputs!");
      return;
    }

    console.log("Good job!");
    console.log(formState.email.value, formState.password.value);
  }

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      <div className={classes.control}>
        <label htmlFor="email">Email</label>
        <input id="email" type="email" onChange={changeEmailHandler} />
      </div>
      <div className={classes.control}>
        <label htmlFor="password">Password</label>
        <input id="password" type="password" onChange={changePasswordHandler} />
      </div>
      <button>Submit</button>
    </form>
  );
}

export default Form;
