import React from 'react';
import './restaurant_profile.css'; 
import food_image from './food_image.jpg';

function RestaurantProfile(){
    return(
        <header className='restaurant_profile'>
            <img src={food_image} alt="Food" className="food-image"/>
        </header>
    )
}

export default RestaurantProfile;

