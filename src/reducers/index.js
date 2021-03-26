import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
const signup=(state=[],action)=>{
    return state;
}
export default combineReducers({
SignUp: signup,
form: formReducer
})