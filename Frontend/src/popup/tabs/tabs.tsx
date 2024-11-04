import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import './tabs.css'
import { Link } from 'react-router-dom'
import { FaCog } from 'react-icons/fa'
import Options from '../../options/options'

function Tabs() {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/options"><FaCog className="settings-icon" title="Settings & Feedback" /></Link>
                </li>
            </ul>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/options" element={<Options />} />
            </Routes>
        </div>
    )
}

export default Tabs