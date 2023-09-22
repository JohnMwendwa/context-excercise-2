export const initialFormState = {
  email: {
    valid: false,
    value: "",
  },
  password: {
    valid: false,
    value: "",
  },
};

export const formReducer = (state, action) => {
  if (action.type === "EMAIL_CHANGED") {
    return {
      ...state,
      email: {
        valid: action.payload !== "" && action.payload.includes("@"),
        value: action.payload,
      },
    };
  }

  if (action.type === "PASSWORD_CHANGED") {
    return {
      ...state,
      password: {
        valid: action.payload.trim().length > 7,
        value: action.payload,
      },
    };
  }

  return initialFormState;
};
