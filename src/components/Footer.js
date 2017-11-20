import React from 'react';

//stateless component
const Footer = (props) => { 
    const date = new Date().toDateString();
    
    return(
        <div className ="bottom">
            <span className="date">{date}</span>
            <p className="footer-text">Made with React</p>
        </div>
    ) 
}

export default Footer;