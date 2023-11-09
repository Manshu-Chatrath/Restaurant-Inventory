import React from "react";
import image from "../image/boom.png";
import { Link } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { signup } from "../actions/index";

class Signup extends React.Component {
  input = (props) => {
    return (
      <>
        <input
          required
          minLength={props.minLength}
          {...props.input}
          placeholder={props.placeholder}
          type={props.type}
          className={props.className}
        />
      </>
    );
  };
  onsubmit = (formValues) => {
    this.props.signup(formValues);
  };
  mistake = () => {
    return (
      <div className="row pt-3">
        <div className="col-12">
          <div className="font-weight-bold text-uppercase text-center text-danger">
            {this.props.signUp?.error
              ? this.props.signUp.error.msg
              : this.props.signUp.message}
          </div>
        </div>
      </div>
    );
  };
  render() {
    return (
      <div className="window">
        <div
          id="container"
          className="container col-lg-3 col-md-5 col-sm-6 col-9  bg-light">
          {this.props.signUp.msg || this.props.signUp.message
            ? this.mistake()
            : null}
          <div id="row1" className="row pt-3">
            <div className="col-12 offset-3">
              <img id="image" src={image} alt="" />
            </div>
          </div>

          <div className="row">
            <div className="col-12 ">
              <h2 className="heading-inventory">Register yourself</h2>
            </div>
          </div>
          <form action="" onSubmit={this.props.handleSubmit(this.onsubmit)}>
            <div className="form-row">
              <div className="col-12">
                <Field
                  name="email"
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  component={this.input}
                />
              </div>
            </div>
            <div className="mt-2 form-row">
              <div className="col-12">
                <Field
                  minLength="5"
                  name="password"
                  className="form-control"
                  type="password"
                  placeholder="Enter Password"
                  component={this.input}
                />
              </div>
            </div>
            <div className="mt-2 form-row">
              <div className="col-12">
                <Field
                  minLength="5"
                  className="form-control"
                  name="confirmpassword"
                  type="password"
                  placeholder="Confirm Password"
                  component={this.input}
                />
              </div>
            </div>
            <button
              id="login"
              disabled={this.props.signUp.status === "pending"}
              class="bg-danger mt-2 mb-2">
              Sign Up
            </button>
          </form>
          <div id="links" className="row pb-4">
            <div id="columns" className="col-12">
              <Link to={`/`}>Already have account?</Link>{" "}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateProps = (props) => {
  return { signUp: props.SignUp };
};
export default connect(mapStateProps, { signup })(
  reduxForm({ form: "supervisorCreate" })(Signup)
);
