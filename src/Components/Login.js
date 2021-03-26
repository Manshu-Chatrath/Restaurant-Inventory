import React from 'react';
import image from './image/boom.png';
import '../signin.css';
import {Link} from 'react-router-dom'
const Login=()=>{

return(<>
    <div id="container" className="container col-lg-3 col-md-5 col-sm-6 col-9  bg-light">
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
<form action="">
    <div className="form-row">
        <div className="col-12">
            <input type="text" className="form-control" placeholder="Enter email" />
        </div>
    </div>
    <div class="mt-2 form-row">
        <div class="col-12">
            <input type="text" className="form-control" placeholder="Enter password" />
        </div>
    </div>
    <button id="login" className="bg-danger mt-2 mb-2">LogIn</button>
</form>
<div id="links" className="row pb-4">
    <div id="columns" className="col-12"><Link to={`/signup`}>New Supervisor?</Link> <Link to={`/signup`}>SignUp</Link>   </div>
    
</div>
</div>
</>
)
}
export default Login;