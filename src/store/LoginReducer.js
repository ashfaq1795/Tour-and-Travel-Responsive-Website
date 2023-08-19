const initialState = {
  loginForm: {
    email: {
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "Email"
      },
      title: "Email",
      value: ""
    },
    password: {
      elementType: "password",
      elementConfig: {
        type: "text",
        placeholder: "Password"
      },
      title: "Password",
      value: ""
    }
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_INPUT_CHANGE":
      const updatedLoginForm = {
        ...state.loginForm
      };
      const updatedFormElement = {
        ...updatedLoginForm[action.id]
      };
      updatedFormElement.value = action.event.target.value;
      updatedLoginForm[action.id] = updatedFormElement;
      return {
        ...state,
        loginForm: updatedLoginForm
      };
    default:
      return state;
  }
};
export default reducer;
