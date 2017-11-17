import React, { Component } from 'react';
import cloudy from '../images/cloudy.png';
import clouds from '../images/clouds.png';
import rain from '../images/rain.png';
import snow from '../images/snow.png';
import sunny from '../images/sun.png';
import '../App.css';
// import { Carousel } from 'react-responsive-carousel';


class Header extends Component { 
    constructor(props) { 
        super(props); //initial state in a class based component
    
        this.state = { 
            forecast: cloudy
        };
        // this.toggleForecast = this.toggleForecast.bind(this);
    }

    // componentDidMount() { 
    //     const forecasts = [cloudy, rain, snow, sunny];    
    //     if (this.timeout) { 
    //         clearTimeout(this.timeout);
    //     }    
    //     for (var i=0; i<forecasts.length; i++) { 
    //         this.timeout= setTimeout(() => { 
    //             this.timeout = null;
    //             this.setState({
    //                 forecast: forecasts[i]
    //             })     
    //         }, 3000); 
    //     }
    // }

    componentWillUnmount() { 
        clearTimeout(this.timeout);
    }

    render() {  
        const tagline ="Weather Data Tracker";
        const forecasts = [cloudy, rain, snow, clouds, sunny];    
        // const forecasts = [sunny];    
        
        return(
            <header className ="top">
                <h1>{tagline}</h1>
                <div>
                    {forecasts.map(function(forecast, index) {
                        return <img key={index} src={forecast} alt={`${forecast}'s picture`} className="weather-logo" />;
                    })}
                </div>
                {/* <img src={this.state.forecast} alt={`${this.state.forecast}'s picture`} className="Sun-logo" />  */}

            </header>
        ) 
    }
}

export default Header;


