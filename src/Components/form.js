import React from 'react';
import '../form.css';
import Nav from '../Components/nav'
class Form extends React.Component
{
    render(){


        return(
        <>
        <Nav />
            <div id="container" class="mt-5 container col-lg-4 col-md-5 col-sm-6 col-9 pt-3 pb-2">
            <div class="rowdsd">
            <div class="">
            <h4 class="heading-inventory">Enter Dish</h4>
            </div>
            <div class="extra">
                <button class="">Add Extras</button>
            </div>
            </div>
            <form action="" class="form">
                <div class="form-row">
                    <label class="ml-2">Dish Name:</label>
                    <div class="col-12">
                        <input type="text" class="form-control" placeholder="Dish name" />
                    </div>
                </div>
                <div class="mt-2 form-row">
                    <label class="ml-2">Price:</label>
                    <div class="col-12">
                        <input type="text" class="form-control" placeholder="Price" />
                    </div>
                </div>
                <div class="mt-2 form-row">
                    <label class="ml-2">Image:</label>
                    <div class="col-12">
                        <input type="text" class="form-control" placeholder="url" />
                    </div>
                </div>
                <div class="mt-2 form-row">
                    <label class="ml-2">Recepie:</label>
                    <div class="col-12">
                        <textarea class="form-control" placeholder="Enter recepie" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                </div>
                <div class="mt-2 form-row">
                    <label class="ml-2">Enter category</label>
                    <div class="col-12">
                        <select class="form-control form-control-sm">
                        <option value="">Chicken</option>
                        <option value="">Beef</option>
                        <option value="">Porc</option>
                        <option value="">Veg</option>
                        <option value="">Drinks</option>
                        <option value="">Special</option>
                          </select>
                    </div>
                </div>
                <button id="register" class="bg-success mt-2 mb-2">Register</button>
            </form>
     
            </div>
        </>
        )
}
}
export default Form;