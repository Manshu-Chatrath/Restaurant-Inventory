import React from 'react';
import '../view.css';
import Nav from '../Components/nav';
import {Field,reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {extras} from '../actions/index';
class Extra extends React.Component
{
    input=(props)=>{
        return(<input required maxLength={props.maxLength}  {...props.input} placeholder={props.placeholder}  className={props.className} type={props.type} name={props.name} />)
    }
 
     onsubmit=(values)=>{
            this.props.extras(values,this.props.match.params.id);
     }
    render()
    {
        return(
        <>
        <Nav />
            <div id="container" className="mt-5 container col-lg-4 col-md-5 col-sm-6 col-9 pt-3 pb-2">
            <div className="row-12">
            <div className="">
           <h4 className="heading-inventory">Add extra item</h4>
            </div>
            </div>
            <form action="" className="form" onSubmit={this.props.handleSubmit(this.onsubmit)}>
                <div className="form-row">
                    <label className="ml-2">Enter extra item: </label>
                    <div className="col-12">
                        <Field maxLength="24" name="title" type="text" className="form-control" component={this.input} placeholder="Enter extra item" />
                    </div>
                    <label className="mt-3 ml-2">Price:</label>
                    <div className="col-12">
                        <Field name="price" type="number" className="form-control" placeholder="Enter price"  component={this.input}/>
                    </div>
                    <label className="mt-3 ml-2">Category:</label>
                    <div className="col-12">
                        <Field maxLength="24" name="category" type="text" className="form-control" component={this.input} placeholder="Enter category" />
                    </div>     
                </div>
                <button id="register" className="mt-3 bg-success mt-2 mb-2">Submit</button>
            </form>
            </div>
            </>
        )
    }
}

export default connect(null,{extras})(reduxForm({form: 'ExtraCreate'})(Extra));