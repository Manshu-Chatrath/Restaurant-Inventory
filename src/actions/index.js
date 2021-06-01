import axios from 'axios';
import history from '../Components/history';
export const signup=(formvalues)=>async(dispatch)=>{
    const response=await axios.post('https://inventory-backend-node.herokuapp.com/signup',{
        email: formvalues.email,
        password: formvalues.password,
        confirmpassword: formvalues.confirmpassword
    });
    console.log(response);
    if(response.data.message)
    {
        dispatch({type: 'Signup',payload: response.data})
    }
    else
    {
        dispatch({type: 'Signup', payload: response});
        history.push('/');
    }
    
}
export const LogIn=(formvalues)=>async(dispatch)=>{
    const response=await axios.post('https://inventory-backend-node.herokuapp.com/',{
        email: formvalues.email,
        password: formvalues.password,
        headers: {
            Authorization: localStorage.getItem('token')
        }
    });

    if(response.data.credentials)
    {   localStorage.setItem('token',response.data.token);
        localStorage.setItem('userId',response.data.id);
        history.push('/main');
        window.location.reload();

    }
    dispatch({type: 'login',payload: response.data})
   
}
export const LogOut=()=>async(dispatch)=>{
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    dispatch({type: 'Logout',payload: []});
    history.push('/');
}
export const fetchallcat=()=>async(dispatch)=>{
    const response=await axios.get('https://inventory-backend-node.herokuapp.com/categories',{
        headers: {
            Authorization: localStorage.getItem('token')
        }
    });
dispatch({type: 'all',payload: response.data.categories[0]});
}
export const feeddishes=(formValues)=>async(dispatch)=>{

    const response=await axios.post('https://inventory-backend-node.herokuapp.com/save-dishes',{
        title: formValues.title,
        price: formValues.price,
        url: formValues.url,
        recepie: formValues.recepie,
        category: formValues.category,
    },{
        headers: {
            Authorization: localStorage.getItem('token')
        }
    });

    dispatch({type: 'Dish_Saved',payload: response.data});
    history.push('/main');
}
export const fetchmenu=()=>async(dispatch)=>{
const response=await axios.get('https://inventory-backend-node.herokuapp.com/menu',{ headers: {
    Authorization: localStorage.getItem('token')
}});

dispatch({type: 'MENU', payload: response.data.items})
}
export const viewone=(id)=> async(dispatch)=>{

    const response=await axios.get(`https://inventory-backend-node.herokuapp.com/view/${id}`,{ headers: {
        Authorization: localStorage.getItem('token')
    }});
    dispatch({type:'VIEW',payload: response.data.items})
}
export const edit=(id,formValues)=>async(dispatch)=>{

    const response=await axios.put(`https://inventory-backend-node.herokuapp.com/edit-dish/${id}`,{
        title: formValues.title,
        price: formValues.price,
        url: formValues.url,
        recepie: formValues.recepie,
        category: formValues.category
    },{
        headers: {
            Authorization: localStorage.getItem('token')
        }
    });
    dispatch({type: 'EDIT',payload: response.data.items});
    history.push('/main');
}
export const delete2=(id)=>async(dispatch)=>{
    const response=await axios.delete(`https://inventory-backend-node.herokuapp.com/delete/${id}`,{ headers: {
        Authorization: localStorage.getItem('token')
    }});
    history.push('/main');
}
export const allcategories=()=>async(dispatch)=>{
    const response=await axios.get('https://inventory-backend-node.herokuapp.com/allcategories',{ headers: {
        Authorization: localStorage.getItem('token')
    }});
    dispatch({type: 'ALL_CAT',payload: response.data.items})
}
export const search=(term)=>async(dispatch)=>{
    
    const response=await axios.get(`https://inventory-backend-node.herokuapp.com/search/${term}`,{ headers: {
        Authorization: localStorage.getItem('token')
    }});
    
    dispatch({type: 'SEARCHING',payload: response.data.items})
}
export const extras=(values,id)=>async(dispatch)=>{
const response=await axios.post(`https://inventory-backend-node.herokuapp.com/extras/${id}`,{
    title: values.title,
    category: values.category,
    price: values.price,
},{
    headers: {
        Authorization: localStorage.getItem('token')
    }
});
history.push('/main')
}
export const extracat=(id)=>async(dispatch)=>{
    const response=await axios.get(`https://inventory-backend-node.herokuapp.com/extracat/${id}`,{ headers: {
        Authorization: localStorage.getItem('token')
    }});
    dispatch({type: 'EXTRACAT', payload: response.data.items});
}
export const fetchextras=(id)=>async(dispatch)=>{
    const response=await axios.get(`https://inventory-backend-node.herokuapp.com/extra/${id}`,{ headers: {
        Authorization: localStorage.getItem('token')
    }});
    dispatch({type: 'FETCHEXTRAS',payload: response.data.items});
}
export const deleteextra=(id)=>async(dispatch)=>{
    const response=await axios.delete(`https://inventory-backend-node.herokuapp.com/deletecat/${id}`,{ headers: {
        Authorization: localStorage.getItem('token')
    }});
    
    history.push(`/main`)
}
export const viewcat=(id)=>async(dispatch)=>{
   const response=await axios.get(`https://inventory-backend-node.herokuapp.com/viewcat/${id}`,{ headers: {
    Authorization: localStorage.getItem('token')
}});
    dispatch({type: 'EDIT_EXTRA',payload: response.data.items})
}
export const editcat=(values,id)=>async(dispatch)=>{
  
    const response=await axios.put(`https://inventory-backend-node.herokuapp.com/edit-cat/${id}`,{
    title: values.title,
    price: values.price,
    category: values.category,
    },{
        headers: {
            Authorization: localStorage.getItem('token')
        }
    });
    history.push('/main');
}

export const disable=(id)=>async(dispatch)=>{

    const response=await axios.post(`https://inventory-backend-node.herokuapp.com/disable/${id}`,{ headers: {
        Authorization: localStorage.getItem('token')
    }});
   
}
export const enable=(id)=>async(dispatch)=>{
    const response= await axios.post(`https://inventory-backend-node.herokuapp.com/enable/${id}`,{ headers: {
        Authorization: localStorage.getItem('token')
    }});
}