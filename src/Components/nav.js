import React from 'react';
import '../main.css';
import image from './image/boom.png';
import {Link} from 'react-router-dom';
import {LogOut} from '../actions/index';
import {connect} from 'react-redux';
class navigation extends React.Component
{

    render()
    {
        return(
            <div className="header">
<div className="icon">
    <img className="image" src={image} alt="" />
    <div><div className="heading">Kitchen Inventory</div>
    <div>Admin Panel</div>
    </div>
</div>
<div className="button">
    <Link to="/main" className="press">View Menu</Link>
    <Link to="/new-dish" className="press">Add New Dish</Link>
    <Link to="/#" className="logout" onClick={()=>{this.props.LogOut()}}>Log Out</Link>
</div>
</div>
        )
    }
}
export default connect(null,{LogOut})(navigation);