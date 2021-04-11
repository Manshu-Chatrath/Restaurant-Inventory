import React from 'react';
import '../view.css';
import Nav from '../Components/nav';
import {connect} from 'react-redux';
import {viewone,extracat,fetchextras,deleteextra} from '../actions/index';
import {Link} from 'react-router-dom'
class View extends React.Component
{
    componentDidMount()
    {   
    this.props.viewone(this.props.match.params.id);
    this.props.extracat(this.props.match.params.id)
    this.props.fetchextras(this.props.match.params.id)
    }
    open=()=>{
        let popup=document.querySelector('.extra2');
        popup.classList.remove('hide');
        window.addEventListener('click',function(e)
        {   if(e.target.className==='extra2')
        {
            popup.classList.add('hide');
        }
          
        })
    }
    categories=()=>{
        if(this.props.categories.length>0)
        {
        return this.props.categories.map(category=>{
            return(
            <>
            <div key={category.id} className="title-extra"><h4>{category.category}</h4></div>
            {this.detail(category.category,category.dishId)}
           </>
            )
        })
    }
    else
    {
        return <h5 className="h5">No extras Added</h5>
    }
    }
    detail=(title,id)=>{
        console.log(title);
        return this.props.extras.map(item=>{
            console.log(item.title)
            if(title===item.category && id===item.dishId)
                {   
                    return(<div key={item.id} className="extra-item mb-3 pt-3">
                    <div key={item.id} className="ml-5 item-name"><span>{item.title}</span><span className="price-extra">Price: {item.price}$</span></div>
                    <div key={item.id} className="mt-2 btns mr-3">
                     <Link to={`/edit-category/${item.id}`}><button className="btns mr-2 pl-3 pr-3">Edit</button></Link><button onClick={()=>{this.props.deleteextra(item.id)}} className="btns">Remove</button>
                    </div>
                </div> )
                }
        })
    }
    popup=()=>{
            return(<div className="hide extra2">
            <div className="extra-tab">
                <div className="image2">
                    <img src={this.props.view[0].url} alt="" />
                </div>
                <div className="headng">
                    <h3>{this.props.view[0].title}</h3>
                </div>
                <div className="p">{this.props.view[0].recepie}</div>
                <div className="extras">
               { this.categories() }
                </div>
             </div>
        </div>)
        
  
    }
    view=()=>{
        if(this.props.view===[])
        {
           return <div className="loader"></div>
        }
        return(
            this.props.view.map(item=>{
                return(
                    <div key={item.id} className="main1 pb-2 pl-2 pr-2">
            <div className="heade mt-3">
                <h1>{item.title}</h1>
            </div>
            <div className="image mt-3">
                <img className="image1" src={item.url} />
            </div>
            <div className="price">Price: {item.price}$</div>
            <div className="description ml-4">
                  <p>{item.recepie}</p>
            </div>
            <Link className="link" to={`/add-extra/${item.id}`}><button id="register"  className="e bg-success mt-2 mb-2">Add Extras</button></Link>
            <button id="register" onClick={()=>{this.open()}} className="bg-success e mb-2">View Extras</button>
                {this.popup()}
          </div>
                )
            })
        )
    }
    render()
    { console.log(this.props.view);
        return(<>
            <Nav />
            {this.view()}
          </>
        )
    }
}
const mapStateToProps=(state=>{
    return({view: state.view,categories: state.extracat, extras: state.allextras})
})
export default connect(mapStateToProps,{viewone,extracat,fetchextras,deleteextra})(View)
