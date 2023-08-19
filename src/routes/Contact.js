import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import contactImage from "../assets/2.jpg";
import Footer from "../components/Footer";
import Input from "../components/Input";
import classes from "../components/Input.module.css";
import { instance2 } from "../axios";
import { useNavigate } from "react-router-dom";
import withErrorHandler from "../hoc/withErrorHandler";

const contact = (props) => {
  const navigate = useNavigate();
  const [state, setState] = useState({
    contactForm: {
      name: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Your Name"
        },
        validation: {
          required: true
        },
        value: "",
        valid: false,
        touched: false
      },
      email: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Email"
        },
        validation: {
          required: true,
          isEmail: true
        },
        value: "",
        valid: false,
        touched: false
      },
      subject: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Subject"
        },
        validation: {
          required: true
        },
        value: "",
        valid: false,
        touched: false
      },
      message: {
        elementType: "textarea",
        elementConfig: {
          placeholder: "Message",
          rows: "4"
        },
        validation: {
          required: true
        },
        value: "",
        valid: false,
        touched: false
      }
    },
    formIsValid: false
  });

  const formValidationHandler = (value, rules) => {
    let isValid = true;
    if (rules.required) {
      isValid = value.trim() !== "" && isValid;
    }
    if (rules.isEmail) {
      const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
      isValid = emailPattern.test(value) && isValid;
    }
    return isValid;
  };

  const inputChangeHandler = (event, id) => {
    const updatedContactForm = {
      ...state.contactForm
    };
    const updatedFormElement = {
      ...updatedContactForm[id]
    };
    updatedFormElement.value = event.target.value;
    updatedFormElement.touched = true;
    updatedFormElement.valid = formValidationHandler(
      updatedFormElement.value,
      updatedFormElement.validation
    );
    updatedContactForm[id] = updatedFormElement;
    let formIsValid = true;
    for (let key in updatedContactForm) {
      formIsValid = updatedContactForm[key].valid && formIsValid;
    }
    setState({ contactForm: updatedContactForm, formIsValid: formIsValid });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const contactData = {};
    for (let key in state.contactForm) {
      contactData[key] = state.contactForm[key].value;
    }
    instance2
      .post("/ContactUs.json", contactData)
      .then((response) => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  let formElementArray = [];
  for (let key in state.contactForm) {
    formElementArray.push({
      id: key,
      config: state.contactForm[key]
    });
  }

  return (
    <div>
      <Navbar />
      <Hero cName="Hero-mid" heroImg={contactImage} title="Contact" />
      <div className={classes.ContactForm}>
        <h1>Send a message to us!</h1>
        <form>
          {formElementArray.map((formElement) => (
            <Input
              key={formElement.id}
              elementConfig={formElement.config.elementConfig}
              value={formElement.config.value}
              valid={formElement.config.valid}
              touched={formElement.config.touched}
              changed={(event) => {
                inputChangeHandler(event, formElement.id);
              }}
            />
          ))}
          <button
            className={classes.btn}
            disabled={!state.formIsValid}
            onClick={onSubmitHandler}
          >
            Send message
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};
export default withErrorHandler(contact, instance2);
