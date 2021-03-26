import React from 'react';
import '../main.css';
class navigation extends React.Component
{

    render()
    {
        return(
            <div className="header">
<div className="icon">
    <img className="image" src="./image/0991affb1e6d44a09b12a65a71d3c25a.png" alt="" />
    <div><div className="heading">Kitchen Inventory</div>
    <div>Admin Panel</div>
    </div>
</div>
<div className="button">
    <button className="press">View Menu</button>
    <button className="press">Add New Dish</button>
    <button className="press">Add Category</button>
    <button className="logout">Log Out</button>
</div>
</div>
        )
    }
}
export default navigation;