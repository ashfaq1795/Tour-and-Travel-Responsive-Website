import React, { useState, useEffect } from "react";
import Backdrop from "../components/UI/Backdrop";
import Aux from "./Auxillary";
import classes from "./withErrorHandler.module.css";

const withErrorHandler = (WrappedComponent, axios) => {
  return (props) => {
    const [error, setError] = useState(null);

    const reqInterceptor = axios.interceptors.request.use((req) => {
      setError(null);
      return req;
    });

    const resInterceptor = axios.interceptors.response.use(
      (res) => res,
      (error) => {
        setError(error);
      }
    );

    useEffect(() => {
      axios.interceptors.request.eject(reqInterceptor);
      axios.interceptors.response.eject(resInterceptor);
    }, [reqInterceptor, resInterceptor]);

    const errorConfirmedHandler = () => {
      setError(null);
    };
    return (
      <Aux>
        <Backdrop show={error} clicked={errorConfirmedHandler} />
        <div
          className={classes.Modal}
          style={{ transform: error ? "translateY(0)" : "translateY(-100vh)" }}
        >
          {error ? error.message : null}
        </div>
        <WrappedComponent {...props} />
      </Aux>
    );
  };
};
export default withErrorHandler;
