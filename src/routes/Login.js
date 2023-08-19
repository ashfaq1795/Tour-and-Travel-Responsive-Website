import React, { useState } from "react";
import { connect } from "react-redux";
import classes from "../components/Input.module.css";
import Input from "../components/Input";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../Context/UserAuthContext";
import { Alert } from "react-bootstrap";
import { GoogleButton } from "react-google-button";

const login = (props) => {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { signIn, googleSignIn } = useUserAuth();

  const submitHandler = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signIn(props.login.email.value, props.login.password.value);
      navigate("/home");
    } catch (error) {
      setError(error.message);
    }
  };
  const googleSignInHandler = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await googleSignIn();
      navigate("/home");
    } catch (error) {
      setError(error.message);
    }
  };
  let formElementArray = [];
  for (let key in props.login) {
    formElementArray.push({
      id: key,
      config: props.login[key]
    });
  }
  return (
    <div className={classes.LoginForm}>
      <h1>Welcome!</h1>
      {error && <Alert variant="danger">{error}</Alert>}
      <form>
        <h2>Login</h2>
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
          Login
        </button>
        <div className={classes.formSwitcher}>
          Don't have an account?{" "}
          <Link className={classes.switch} to="/signup">
            Sign up
          </Link>
          <h6>Or</h6>
          <div onClick={googleSignInHandler}>
            <GoogleButton
              className="g-btn"
              type="dark"
              style={{ width: "97%", margin: "2rem 10px", marginTop: "10px" }}
            />
          </div>
          Go Back :{" "}
          <Link to="/home" style={{ textDecoration: "none" }}>
            Home
          </Link>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    login: state.lReducer.loginForm
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeHandler: (event, id) =>
      dispatch({
        type: "LOGIN_INPUT_CHANGE",
        event: event,
        id: id
      })
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(login);
