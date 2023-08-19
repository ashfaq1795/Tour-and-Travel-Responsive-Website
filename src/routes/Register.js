import React, { useState } from "react";
import { connect } from "react-redux";
import classes from "../components/Input.module.css";
import Input from "../components/Input";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../Context/UserAuthContext";
import { Alert } from "react-bootstrap";
import { GoogleButton } from "react-google-button";

const register = (props) => {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { signUp, googleSignIn } = useUserAuth();

  const submitHandler = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(props.register.email.value, props.register.password.value);
      navigate("/login");
    } catch (error) {
      setError(error.message);
    }
  };
  const googleSignInHandler = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await googleSignIn();
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  let formElementArray = [];
  for (let key in props.register) {
    formElementArray.push({
      id: key,
      config: props.register[key]
    });
  }
  return (
    <div className={classes.LoginForm}>
      <h1>Welcome!</h1>
      {error && <Alert variant="danger">{error}</Alert>}
      <form>
        <h2>Sign Up</h2>
        {formElementArray.map((formElement) => (
          <Input
            key={formElement.id}
            label={formElement.config.title}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            valid={formElement.config.valid}
            touched={formElement.config.touched}
            changed={(event) => props.onChangeHandler(event, formElement.id)}
          />
        ))}
        <button className={classes.loginbtn} onClick={submitHandler}>
          Sign Up
        </button>
        <div className={classes.formSwitcher}>
          Already have an account?{" "}
          <Link className={classes.switch} to="/login">
            Login
          </Link>
        </div>
        <h6>Or</h6>
        <div onClick={googleSignInHandler}>
          <GoogleButton
            className="g-btn"
            type="dark"
            style={{ width: "97%", margin: "0.8rem 10px" }}
          />
        </div>
        Go Back :{" "}
        <Link to="/" style={{ textDecoration: "none" }}>
          Home
        </Link>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    register: state.rReducer.registerForm
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeHandler: (event, id) =>
      dispatch({
        type: "REGISTER_INPUT_CHANGE",
        event: event,
        id: id
      })
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(register);
