import React from 'react';
import './chatbot.css'; 
import RestaurantProfile from '../components/restaurant_profile';

function Chatbot(){
    return(
        <header className='ChatBot'>
            <div className='Profile-text'>
                <RestaurantProfile />
            </div>
        </header>
    )
}

export default Chatbot;