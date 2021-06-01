import React from 'react';
import '../main.css';
import Nav from '../Components/nav';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import {fetchallcat,fetchmenu,delete2,search,disable,enable} from '../actions/index';
class Menu extends React.Component
{
    state={
        id: 0
    }
    componentDidMount()
    {   
        this.props.fetchmenu();
        this.props.fetchallcat();  
    }
    open=(id)=>{
        let deletetab=document.querySelector('.delete-tab');
        this.setState({id: id})
        deletetab.classList.remove('hide');
        }
    delete=(id)=>{
        this.props.delete2(id);
        window.location.reload();
    }
    tog=(title)=>{
        if(title==='false')
        {
            return 'Disable Dish'
        }
        return 'Enable Dish'
    }
    menus=(title)=>{

      return this.props.menu.map(item=>{
     
        if(item.Category===title)
            {   
                return(
                    <div key={item.id} className="article">
                    <i className="fa fa-times cross" onClick={(e)=>{this.open(item.id)}}></i>
                    <div  className="title"><h4>{item.title}</h4></div>
                    <div className="picture"><img src={item.url} alt="" className="pic" />
                    </div>
                    <div className="buttons mt-2">
                        <button className="btns"><Link className="link" to={`/edit-dish/${item.id}`}>Edit Dish</Link></button><button className="btns" onClick={(e)=>{if(e.target.innerHTML==='Disable Dish') {this.props.disable(item.id);e.target.innerHTML='Enable Dish'} else if(e.target.innerHTML==='Enable Dish') {this.props.enable(item.id);e.target.innerHTML='Disable Dish'} }}>{this.tog(item.active)}</button><button  className="btns"><Link className="link" to={`/view/${item.id}`}>View Dish</Link></button>
                    </div>
                    <div className="delete-tab hide" onClick={()=>{let deletetab=document.querySelector('.delete-tab');deletetab.classList.add('hide')}}>
               <div className="tab">
                   <div className="text">
                    <h1>Delete Dish?</h1>
                    <p>Do you want to delete this dish?</p>
                    <div className="btnns">
                        <button  className="delete" onClick={(e)=>{this.delete(this.state.id)}}>Delete</button><button className="delete">Cancel</button>
                    </div>
                   </div>
               </div>
                </div>
                    </div>
                )
            }
        })
    }
    nav=()=>{
        return this.props.categories.map(category=>{
            return (<a key={category.Category} href={`#${category.Category}`}>{category.Category}</a>)
        })
    }
    main=()=>{
        if(this.props.categories.length===0)
        {
            return <h3 className="nothing">There are no items!!</h3>
        }
        return this.props.categories.map(category=>{
            return (
                <div key={category.Category} className="items mt-4">
                    <div className="heading" id={category.Category}><h2 className="heading2">{category.Category}</h2></div><hr />
                    <div  className="main">
                        {this.menus(category.Category)}
                    </div>
                    <hr />
                </div>
            )
        })
    }
render()
{
return(
<>
<Nav />
<div className="mt-4 searched">
<div className="input">
    <span> Search for any dish:</span>
    <input type="text" onChange={(e)=>{if(e.target.value!==""){this.props.search(e.target.value)} else { this.props.fetchmenu();
        this.props.fetchallcat(); }}} name="search" className="search" />
</div>
</div>
<hr className="mt-4" />
<div className="navi">
<div className="scrollmenu">
    {this.nav()}
  </div>
</div>
{this.main()}
    </>
)
}
}
const mapstatetoprops=(state=>{
    return {categories: state.categories,menu: state.menu}
})
export default connect(mapstatetoprops,{fetchmenu,fetchallcat,delete2,search,disable,enable})(Menu);
