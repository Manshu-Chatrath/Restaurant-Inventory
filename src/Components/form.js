import React from "react";
import Nav from "../Components/nav";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { feeddishes, viewone, edit, allcategories } from "../actions/index";

class Form extends React.Component {
  componentDidMount() {
    this.props.allcategories();
    if (this.props.match.params.id) {
      this.props.viewone(this.props.match.params.id);
    }
  }
  categories = () => {
    return this.props.categories.map((category) => {
      return (
        <option key={category.id} id={category.id}>
          {category.title}
        </option>
      );
    });
  };
  inputs = (props) => {
    return (
      <input
        required
        maxLength={props.maxLength}
        {...props.input}
        placeholder={props.placeholder}
        className={props.className}
        type={props.type}
        name={props.name}
      />
    );
  };
  textarea = (props) => {
    return (
      <textarea
        required
        {...props.input}
        placeholder={props.placeholder}
        className={props.className}
        type={props.type}
        name={props.name}
        rows="3"
      />
    );
  };
  onsubmit = (values) => {
    if (this.props.match.params.id) {
      return this.props.edit(this.props.match.params.id, values);
    }
    return this.props.feeddishes(values);
  };
  allinputs = () => {
    return (
      <>
        <div className="form-row">
          <label className="ml-2">Dish Name:</label>
          <div className="col-12">
            <Field
              maxLength="24"
              placeholder="Enter name of dish"
              className="form-control"
              type="text"
              name="title"
              component={this.inputs}
            />
          </div>
        </div>
        <div className="mt-2 form-row">
          <label className="ml-2">Price:</label>
          <div className="col-12">
            <Field
              placeholder="Enter price of the dish"
              className="form-control"
              type="number"
              name="price"
              component={this.inputs}
            />
          </div>
        </div>
        <div className="mt-2 form-row">
          <label className="ml-2">Image:</label>
          <div className="col-12">
            <Field
              maxLength="480"
              placeholder="Enter the url of the image"
              className="form-control"
              type="url"
              name="url"
              component={this.inputs}
            />
          </div>
        </div>
        <div className="mt-2 form-row">
          <label className="ml-2">Recepie:</label>
          <div className="col-12">
            <Field
              maxLength="480"
              placeholder="Enter recepie"
              className="form-control"
              type="text"
              row="3"
              name="recepie"
              component={this.textarea}
            />
          </div>
        </div>
        <div className="mt-2 form-row">
          <label className="ml-2">Enter category</label>
          <div className="col-12">
            <Field
              maxLength="24"
              name="category"
              className="form-control form-control-sm"
              component="select">
              <option value="">Select One</option>
              {this.categories()}
            </Field>
          </div>
        </div>
      </>
    );
  };
  render() {
    return (
      <>
        <Nav />
        <div
          id="container"
          className="mt-5 container col-lg-4 col-md-5 col-sm-6 col-9 pt-3 pb-2">
          {this.props.match.params.id ? (
            <div className="row-12">
              <div className="">
                <h4 className="heading-inventory">Edit Dish</h4>
              </div>
            </div>
          ) : (
            <div className="row-12">
              <h4 className="heading-inventory">Add new dish</h4>
            </div>
          )}

          {this.props.match.params.id ? (
            <form
              onSubmit={this.props.handleSubmit(this.onsubmit)}
              className="form">
              {this.allinputs()}
              <button id="register" className="bg-success mt-2 mb-2">
                Submit
              </button>
            </form>
          ) : (
            <form
              onSubmit={this.props.handleSubmit(this.onsubmit)}
              className="form">
              {this.allinputs()}
              <button id="register" className="bg-success mt-2 mb-2">
                Submit
              </button>
            </form>
          )}
        </div>
      </>
    );
  }
}
const mapStateToProps = (state, ownprops) => {
  if (ownprops.match.params.id) {
    if (state.view.length > 0) {
      return {
        categories: state.allcategories,
        view: state.view,
        initialValues: {
          title: state.view[0].title,
          price: state.view[0].price,
          url: state.view[0].url,
          recepie: state.view[0].recepie,
          category: state.view[0].Category,
        },
      };
    }
  }
  return { categories: state.allcategories };
};
export default connect(mapStateToProps, {
  feeddishes,
  viewone,
  edit,
  allcategories,
})(reduxForm({ form: "supervisorCreate", enableReinitialize: true })(Form));
