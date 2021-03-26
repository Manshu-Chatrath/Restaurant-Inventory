import React from 'react';
import LogIn from './Login';
import Signup from './signup';
import {BrowserRouter,Route} from 'react-router-dom'
const App=()=>{
    return(<>
    <BrowserRouter>
    <Route path="/" exact component={LogIn} />
    <Route path="/signup" exact component={Signup} />
    </BrowserRouter>
    </>
    )
}
export default App;