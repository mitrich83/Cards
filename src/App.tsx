import React from 'react';
import './App.css';
import Navbar from './UI/components/Navbar';
import {Routes} from './UI/routes/Routes';

const App = () => {
    return (
        <div className="App">
            <Navbar/>
            <Routes/>
        </div>
    );
}

export default App;
