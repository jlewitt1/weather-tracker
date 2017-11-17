import React, { Component } from 'react';
import WeatherItem from './WeatherItem';
import capitalize from 'capitalize';
// import AutosizeInput from 'react-input-autosize';


class SearchBar extends Component { 
    constructor(props) { 
        super(props); //initial state in a class based component
        
        this.state = { //entire component will re-render when state changes
            value: '',
            entered: false,
            checked: false
        };
        // this.handleChange = this.handleChange.bind(this);
        // this.toggle = this.toggle.bind(this);   
    }

    handleChange(event) { 
        console.log("handleChange", event)
        if (this.timeout) { 
            clearTimeout(this.timeout);
        }
        const val = event.target.value;
        console.log("val", val);
        this.timeout= setTimeout(() => { 
            console.log("setTimeout");
            this.timeout = null;
            this.setState({ 
                value: val,            
                checked: !this.state.checked
            });         
        }, 1000);       
    }

    // toggle() { 
    //     this.setState({
    //         entered: !this.state.entered,
    //     })
    // }

    render() { 
        console.log("render()");
        console.log("this.state.value", this.state.value);
        const content = 
            this.state.checked ?  
                    <h3>Showing data for <span id="current-city"> 
                        {capitalize.words((this.state.value))}</span>:<br/><br/>
                    </h3> 
            : null;
        const weatherItem =  <WeatherItem city={this.state.value} />
        console.log("WeatherItem",weatherItem);
        return (  
        <div className="col-md-12 holder">
            <div className = "searchBar">    
                <input type="text" onBlur={this.handleChange.bind(this)} placeholder="Enter City..."/> 
            </div>
            <div>
                {content}
                <br/>
            </div>
            {weatherItem}
            {/* <WeatherItem city={this.state.value}/> */}
            <br/>
        </div>
        );
    }
}

export default SearchBar;