import React, { Component } from 'react';
// import initials from 'initials';
import axios from 'axios';
import capitalize from 'capitalize';
import moment from 'moment';
import cloudy from '../images/cloudy.png';
import clouds from '../images/clouds.png';
import rain from '../images/rain.png';
import snow from '../images/snow.png';
import sunny from '../images/sun.png';

class WeatherItem extends Component { 
    constructor(props) { 
        super(props); //initial state in a class based component
        console.log("weatherItem Constructor", props);
        this.state = { //entire component will re-render when state changes
            output: [],
            outlook: '',
            // infoStatus: ''
            city: this.props.city
        };        
        // this.setOutlook = this.setOutlook.bind(this);
        this.getCity = this.getCity.bind(this);
        this.checkWeather = this.checkWeather.bind(this);
        this.toggleWeatherInfo = this.toggleWeatherInfo.bind(this);
        // this.validateInput = this.validateInput.bind(this);        
    }

    // validateInput(result) { 
    //     if (result.request.status === 200) { 
    //         console.log("Status - 200");
    //         console.log("validate input", result.request.status);
    //     }
    // }
    
    componentWillReceiveProps(newProps) {  //called when there are new props
        console.log("ComponentWillReceiveProps()", newProps);
        const city = newProps.city;
        if (!city) { 
            console.log("no city inside componentwillReceiveProps() - no API request"); //TODO: default look of app with no city 
            return
        } else { 
            this.getCity(city);   
            this.checkWeather();
        }
    }

    getCity(city) { 
        console.log("getCity()", city);
        const key = 'b615ea90313c05010accb30778d17e56';
        // let input = this.props.city;
        let _this = this; //TODO: use arrow functions instead     
        let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${key}`;
       
        console.log(url);
        // this.validateInput(url);
        
        this.serverRequest = 
          axios
            .get(url)
            .then(function(result) {    
                console.log(result);
                console.log(result.data.weather[0].description);                
              _this.setState({
                output: [
                    Math.round((result.data.main.temp * 9/5 +32),2),
                    result.data.main.humidity,
                    capitalize.words(result.data.weather[0].description),
                    result.data.sys.country,
                    Math.round((result.data.main.temp_min * 9/5 +32),2),
                    Math.round((result.data.main.temp_max * 9/5 +32),2),
                    moment.unix(result.data.sys.sunrise).format('h:mm A'),
                    moment.unix(result.data.sys.sunset).format('h:mm A'),
                ]  
              }); 
            })
            this.setState({outlook: ''})
            
    }

    checkWeather() {       
        if (['sunny','sun','clear','mostly sunny','clear sky'].indexOf((JSON.stringify(this.state.output[2])) >=0)) { 
            console.log("image - sun");  
            this.setState({
                outlook: sunny
            })
        } else if (['drizzle','mist','light rain','heavy rain','thunderstorms','showers','light showers'].indexOf((JSON.stringify(this.state.output[2])) >=0))  { 
            console.log("image - rain");            
            this.setState({
                outlook: rain
            })
            console.log("rain");
        } else if (['snow','snowstorm','hail','sleet','heavy snow'].indexOf((JSON.stringify(this.state.output[2])) >=0)) { 
            console.log("image - snow");            
            this.setState({
                outlook: snow
            })
        } else if (['cloudy','overcast','broken clouds','clouds', 'few clouds','scattered clouds'].indexOf((JSON.stringify(this.state.output[2])) >=0)){ 
            console.log("image - clouds");            
            this.setState({
                outlook: clouds
            })
        } else { 
            console.log("image - cloudy");            
            this.setState({
                outlook: cloudy
            })
        }        
    }

    componentWillUnmount() { 
        this.serverRequest.abort();
    }

    toggleWeatherInfo() { 
        
    }



    render() { 
        return(  
            <table className="list-group-item">
                <tbody>
                    <tr>
                        <td>
                            <div className="location">{this.props.city.toUpperCase()}, {this.state.output[3]}</div>
                            <div className="forecast"> <img alt={this.state.outlook} src={this.state.outlook}/></div>
                            {/* <div className="code">City Code: <span id="stats">{initials(this.props.city.toUpperCase())}</span></div> */}
                            {/* <div className="conditions">Country Code: <span id="stats"> {this.state.output[3]}</span></div> */}
                            <div className="temp">Temperature (F): 
                                <span id="stats"> {this.state.output[0]}°</span>
                                <div id="max">Daily Max: {this.state.output[5]}°</div>
                                <div id="min">Daily Min: {this.state.output[4]}°</div>
                            </div>
                            <div className="humidity">Humidity: <span id="stats">{this.state.output[1]}%</span> </div>
                            <div className="conditions">Conditions: <span id="stats"> {this.state.output[2]}</span></div>
                            <div className="sunrise">Sunrise: <span id="stats"> {this.state.output[6]}</span></div>
                            <div className="sunset">Sunset: <span id="stats"> {this.state.output[7]}</span></div>
                        </td>
                    </tr>
                </tbody>
            </table>

        )
    }
}

export default WeatherItem;










