import React, { Component } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
     <div className="holder">   
        <div className="App">
            <Header />
        </div>
        <br/>
        <SearchBar />
        <Footer />
     </div>  
    );
  }
}

export default App;
