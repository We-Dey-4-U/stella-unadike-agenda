// client/src/containers/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Agenda from './components/Agenda';
import Tools from './components/Tools';
import Complaints from './components/Complaints';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/agenda" element={<Agenda />} />
                <Route path="/tools" element={<Tools />} />
                <Route path="/complaints" element={<Complaints />} />
            </Routes>
        </Router>
    );
};

export default App;