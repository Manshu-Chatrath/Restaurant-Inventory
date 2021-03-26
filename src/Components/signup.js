import React from 'react';
import image from './image/boom.png';
import {Link} from 'react-router-dom';
import '../signin.css'
class Signup extends React.Component
{
    render()
    {
        return( <div id="container" class="container col-lg-3 col-md-5 col-sm-6 col-9  bg-light">
        <div id="row1" class="row pt-3">
            <div class="col-12 offset-3">
            <img id="image" src={image} alt="" />
            </div>
        </div>
      
        <div class="row">
        <div class="col-12 ">
        <h2 class="heading-inventory">Register yourself</h2>
        </div>
        </div>
        <form action="">
            <div class="form-row">
                <div class="col-12">
                    <input type="text" class="form-control" placeholder="Enter email" />
                </div>
            </div>
            <div class="mt-2 form-row">
                <div class="col-12">
                    <input type="text" class="form-control" placeholder="Enter password" />
                </div>
            </div>
            <div class="mt-2 form-row">
                <div class="col-12">
                    <input type="text" class="form-control" placeholder="Confirm password" />
                </div>
            </div>
            <button id="login" class="bg-danger mt-2 mb-2">Sign Up</button>
        </form>
        <div id="links" class="row pb-4">
            <div id="columns" class="col-12"><Link to={`/`}>Already have account?</Link>   </div>
            
        </div>
        </div>)
    }
}
export default Signup