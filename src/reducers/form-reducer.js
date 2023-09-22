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
    if (action.payload === "" || !action.payload.includes("@")) {
      return {
        ...state,
        email: {
          valid: false,
          value: action.payload,
        },
      };
    } else {
      return {
        ...state,
        email: {
          valid: true,
          value: action.payload,
        },
      };
    }
  }

  if (action.type === "PASSWORD_CHANGED") {
    if (action.payload.trim().length < 7) {
      return {
        ...state,
        password: {
          valid: false,
          value: action.payload,
        },
      };
    } else {
      return {
        ...state,
        password: {
          valid: true,
          value: action.payload,
        },
      };
    }
  }
  return initialFormState;
};
