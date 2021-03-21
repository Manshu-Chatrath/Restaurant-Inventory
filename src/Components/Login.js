import React from 'react';
import image from './image/boom.png';
const Login=()=>{

return(<>
    <div id="container" class="container col-lg-3 col-md-5 col-sm-6 col-9  bg-light">
<div id="row1" class="row pt-3">
    <div class="col-12 offset-3">
    <img id="image" src={image} alt="" />
    </div>
</div>
<div class="row">
<div class="col-12 ">
<h2 class="heading-inventory">Kitchen Inventory</h2>
</div>
</div>
<form action="">
    <div class="form-row">
        <div class="col-12">
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
<div id="links" class="row pb-4">
    <div id="columns" className="col-12"><a>New Supervisor?</a> <a>SignUp</a>   </div>
    
</div>
</div>
</>
)
}
export default Login;