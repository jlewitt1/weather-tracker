import React, { Component } from 'react';
import WeatherItem from './WeatherItem';

const WeatherList = (props) => { 
    const weatherItems = props.items.map((item)=> { 
         return (
         <WeatherItem  //give each item a key so can update the element without needing to re-render the whole list
             key = {item} /> 
         );
     });
     return (
         <ul className = "col-md-4 list-group" >
             {weatherItems}
         </ul>
     );
 }; 
 
export default WeatherList;


