import React from 'react';
import './popup.css'
import {HashRouter as Router } from 'react-router-dom';
import Tabs from './tabs/tabs';

const Popup = () => {
    return (
        <div className="container">
            <Router><Tabs /></Router>
        </div>
    )
};

export default Popup;