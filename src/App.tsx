import React from 'react';
import './App.css';
import {Header} from './UI/components/Header';
import {Main} from './UI/components/Main';

const App = () => {
    return (
        <div className="App">
            <Header/>
            <Main/>
        </div>
    );
}

export default App;
