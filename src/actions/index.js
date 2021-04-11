import axios from 'axios';
import history from '../Components/history';
export const signup=(formvalues)=>async(dispatch)=>{
    const response=await axios.post('http://localhost:2000/signup',{
        email: formvalues.email,
        password: formvalues.password,
        confirmpassword: formvalues.confirmpassword
    });
    console.log(response);
    if(response.data.error)
    {
        dispatch({type: 'Signup',payload: response.data.error})
    }
    else if(response.data.message)
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
    const response=await axios.post('http://localhost:2000/',{
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
    localStorage.removeItem('userId')
    dispatch({type: 'Logout',payload: []});
    window.location.reload();
}
export const fetchallcat=()=>async(dispatch)=>{
    const response=await axios.get('http://localhost:2000/categories',{
        headers: {
            Authorization: localStorage.getItem('token')
        }
    });
dispatch({type: 'all',payload: response.data.categories[0]});
}
export const feeddishes=(formValues)=>async(dispatch)=>{

    const response=await axios.post('http://localhost:2000/save-dishes',{
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
const response=await axios.get('http://localhost:2000/menu',{ headers: {
    Authorization: localStorage.getItem('token')
}});

dispatch({type: 'MENU', payload: response.data.items})
}
export const viewone=(id)=> async(dispatch)=>{

    const response=await axios.get(`http://localhost:2000/view/${id}`,{ headers: {
        Authorization: localStorage.getItem('token')
    }});
    dispatch({type:'VIEW',payload: response.data.items})
}
export const edit=(id,formValues)=>async(dispatch)=>{

    const response=await axios.put(`http://localhost:2000/edit-dish/${id}`,{
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
    const response=await axios.delete(`http://localhost:2000/delete/${id}`,{ headers: {
        Authorization: localStorage.getItem('token')
    }});
    history.push('/main');
}
export const allcategories=()=>async(dispatch)=>{
    const response=await axios.get('http://localhost:2000/allcategories',{ headers: {
        Authorization: localStorage.getItem('token')
    }});
    dispatch({type: 'ALL_CAT',payload: response.data.items})
}
export const search=(term)=>async(dispatch)=>{
    
    const response=await axios.get(`http://localhost:2000/search/${term}`,{ headers: {
        Authorization: localStorage.getItem('token')
    }});
    
    dispatch({type: 'SEARCHING',payload: response.data.items})
}
export const extras=(values,id)=>async(dispatch)=>{
    console.log("We are inside extras")
const response=await axios.post(`http://localhost:2000/extras/${id}`,{
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
    const response=await axios.get(`http://localhost:2000/extracat/${id}`,{ headers: {
        Authorization: localStorage.getItem('token')
    }});
    dispatch({type: 'EXTRACAT', payload: response.data.items});
}
export const fetchextras=(id)=>async(dispatch)=>{
    const response=await axios.get(`http://localhost:2000/extra/${id}`,{ headers: {
        Authorization: localStorage.getItem('token')
    }});
    dispatch({type: 'FETCHEXTRAS',payload: response.data.items});
}
export const deleteextra=(id)=>async(dispatch)=>{
    const response=await axios.delete(`http://localhost:2000/deletecat/${id}`,{ headers: {
        Authorization: localStorage.getItem('token')
    }});
    console.log("So response after removing is ");
    history.push(`/main`)
}
export const viewcat=(id)=>async(dispatch)=>{
   const response=await axios.get(`http://localhost:2000/viewcat/${id}`,{ headers: {
    Authorization: localStorage.getItem('token')
}});
    dispatch({type: 'EDIT_EXTRA',payload: response.data.items})
}
export const editcat=(values,id)=>async(dispatch)=>{
    console.log("We are editing ");
    const response=await axios.put(`http://localhost:2000/edit-cat/${id}`,{
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
    console.log(id);
    const response=await axios.post(`http://localhost:2000/disable/${id}`,{ headers: {
        Authorization: localStorage.getItem('token')
    }});
    console.log(response);
}
export const enable=(id)=>async(dispatch)=>{
    const response= await axios.post(`http://localhost:2000/enable/${id}`,{ headers: {
        Authorization: localStorage.getItem('token')
    }});
}