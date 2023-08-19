const initialState = {
  registerForm: {
    name: {
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "Name"
      },
      title: "Name",
      value: ""
    },
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
    case "REGISTER_INPUT_CHANGE":
      const updatedRegisterForm = {
        ...state.registerForm
      };
      const updatedFormElement = {
        ...updatedRegisterForm[action.id]
      };
      updatedFormElement.value = action.event.target.value;
      updatedRegisterForm[action.id] = updatedFormElement;
      return {
        ...state,
        registerForm: updatedRegisterForm
      };
    default:
      return state;
  }
};
export default reducer;
