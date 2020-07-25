import React from 'react';


function WeatherCard(props) {
    return(
     <div className="card">
         <h1 className="city">Nairobi</h1>
         <h3 className="country">Kenya</h3>
         <img className="img"src="" alt="Weather icon"/>
         <h1 className="temp">20 C</h1>
         <h3 className="condition">Cloudy</h3>
    
  
    </div>
     
     ) ;
  }
  
  export default WeatherCard;
  