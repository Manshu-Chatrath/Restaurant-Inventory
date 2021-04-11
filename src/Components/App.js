import React,{useState} from 'react';
import LogIn from './Login';
import Signup from './signup';
import {Route,Router,Redirect} from 'react-router-dom';
import {LogOut} from '../actions/index';
import {connect} from 'react-redux';
import history from './history';
import main from './main';
import form from './form';
import View from '../Components/view';
import Extra from '../Components/extra';
import Edit from '../Components/Edit-extra';
const App=(props)=>{
 const [token,settoken]=useState(localStorage.getItem('token'))
 const [id,setId]=useState(localStorage.getItem('userId'));
 const [identity,setidentity]=useState(token+id);
 function timer()
 {  
      setTimeout(function(){
            props.LogOut();
     },3600000)
 }
    return(<>
    <Router history={history}>
    <Route path="/" exact component={LogIn} />
    <Route path="/signup" exact component={Signup} />
    {identity ? 
    <>
    {timer()}
    <Redirect from='*' to='/main' />
    <Route path="/main" exact component={main} />
    <Route path="/new-dish" exact component={form} />
    <Route path="/view/:id" exact component={View} />
    <Route path="/add-extra/:id" exact component={Extra} />
    <Route path="/edit-dish/:id" exact component={form} />
    <Route path="/edit-category/:id" exact component={Edit} />
    </>
        :
        <><Redirect to='/'  /></>
    }
    </Router>
    </>
    )
}
export default connect(null,{LogOut})(App);