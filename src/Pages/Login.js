import React from "react";
import { useDispatch, useSelector } from "react-redux";
import image from "../image/boom.png";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { LogIn } from "../actions/index";
const Login = (props) => {
  const dispatch = useDispatch();
  const login = useSelector((state) => state.login);

  function inputs(props) {
    return (
      <input
        type={props.type}
        name={props.name}
        required
        {...props.input}
        placeholder={props.placeholder}
        className={props.className}
      />
    );
  }
  function onsubmit(formValues) {
    dispatch(LogIn(formValues));
  }
  function invalid() {
    return (
      <div className="row pt-3">
        <div className="col-12">
          <div className="font-weight-bold text-uppercase text-center text-danger">
            {login.message}
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="window">
        <div
          id="container"
          className="container col-lg-3 col-md-5 col-sm-6 col-9  bg-light">
          {login?.message !== "success" ? invalid() : null}
          <div id="row1" className="row pt-3">
            <div className="col-12 offset-3">
              <img id="image" src={image} alt="" />
            </div>
          </div>
          <div className="row">
            <div className="col-12 ">
              <h2 className="heading-inventory">Kitchen Inventory</h2>
            </div>
          </div>
          <form action="" onSubmit={props.handleSubmit(onsubmit)}>
            <div className="form-row">
              <div className="col-12">
                <Field
                  name="email"
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  component={inputs}
                />
              </div>
            </div>
            <div className="mt-2 form-row">
              <div className="col-12">
                <Field
                  name="password"
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  component={inputs}
                />
              </div>
            </div>
            <button
              disabled={login?.status === "pending"}
              id="login"
              className="bg-danger mt-2 mb-2">
              LogIn
            </button>
          </form>
          <div id="links" className="row pb-4">
            <div id="columns" className="col-12">
              <Link to={"/signup"}>New Supervisor?</Link>{" "}
              <Link to={`/signup`}>SignUp</Link>{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default connect(null, { LogIn })(
  reduxForm({ form: "LoginForm" })(Login)
);
