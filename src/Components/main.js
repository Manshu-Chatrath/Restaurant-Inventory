import React from 'react';
import '../main.css'
class Menu extends React.Component
{
render()
{
return(
<>
<div class="mt-4 searched">
<div class="input">
    <span  for=""> Search for any dish:</span>
    <input type="text" class="search" />
</div>
</div>
<hr class="mt-4" />
<div class="navi">
<div class="scrollmenu">
    <a href="#home">Home boom</a>
    <a href="#news">News</a>
    <a href="#contact">Contact</a>
    <a href="#about">About</a>
    <a href="#support">Support</a>
    <a href="#blog">Blog</a>
    <a href="#tools">Tools</a>  
    <a href="#base">Base</a>
    <a href="#custom">Custom</a>
    <a href="#more">More</a>
    <a href="#logo">Logo</a>
    <a href="#friends">Friends</a>
    <a href="#partners">Partners</a>
    <a href="#people">People</a>
    <a href="#work">Work</a>
  </div>
</div>
<div class="items mt-4">
    <div class="heading"><h2 class="heading2">Cuisine-Poulet</h2></div><hr />
    <div class="main">
        <div class="article">
            <i class="fa fa-times cross"></i>
            <div class="title"><h4>Labrador</h4></div>
            <div class="picture"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Labrador_on_Quantock_%282175262184%29.jpg/1200px-Labrador_on_Quantock_%282175262184%29.jpg" alt="" class="pic" />
            </div>
            <div class="buttons mt-2">
                <button class="btns">Edit Dish</button><button class="btns">Disable Dish</button><button class="btns">View Dish</button>
            </div>
            </div>
        <div class="article"> 
            <i class="fa fa-times cross"></i>
            <div class="title"><h4>Labrador</h4></div>
        <div class="picture"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Labrador_on_Quantock_%282175262184%29.jpg/1200px-Labrador_on_Quantock_%282175262184%29.jpg" alt="" class="pic" /></div>
        <div class="buttons mt-2">
            <button class="btns">Edit Dish</button><button class="btns">Disable Dish</button><button class="btns">View Dish</button>
        </div>
        </div>
        <div class="article"> 
            <i class="fa fa-times cross"></i> <div class="title"><h4>Labrador</h4></div>
        <div class="picture"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Labrador_on_Quantock_%282175262184%29.jpg/1200px-Labrador_on_Quantock_%282175262184%29.jpg" alt="" class="pic" /></div>
        <div class="buttons mt-2">
            <button class="btns">Edit Dish</button><button class="btns">Disable Dish</button><button class="btns">View Dish</button>
        </div>
        </div>
    
    </div>
    <hr />
    </div>
    <div class="items ">
        <div class="heading"><h2 class="heading2">Cuisine-Poulet</h2></div><hr />
        <div class="main">
            <div class="article">
                <div class="title"><h4>Labrador</h4></div>
                <div class="picture"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Labrador_on_Quantock_%282175262184%29.jpg/1200px-Labrador_on_Quantock_%282175262184%29.jpg" alt="" class="pic" /></div>
                <div class="buttons mt-2">
                    <button class="btns">Edit Dish</button><button class="btns">Disable Dish</button><button class="btns">View Dish</button>
                </div>
                </div>
            <div class="article">  <div class="title"><h4>Labrador</h4></div>
            <div class="picture"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Labrador_on_Quantock_%282175262184%29.jpg/1200px-Labrador_on_Quantock_%282175262184%29.jpg" alt="" class="pic" /></div>
            <div class="buttons mt-2">
                <button class="btns">Edit Dish</button><button class="btns">Disable Dish</button><button class="btns">View Dish</button>
            </div>
            </div>
            <div class="article">  <div class="title"><h4>Labrador</h4></div>
            <div class="picture"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Labrador_on_Quantock_%282175262184%29.jpg/1200px-Labrador_on_Quantock_%282175262184%29.jpg" alt="" class="pic" /></div>
            <div class="buttons mt-2">
                <button class="btns">Edit Dish</button><button class="btns">Disable Dish</button><button class="btns">View Dish</button>
            </div>
            </div>
        
        </div>
        <hr />
        </div>
    </>
)
}
}
export default Menu;
