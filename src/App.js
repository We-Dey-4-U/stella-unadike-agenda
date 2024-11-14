import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Agenda from './components/Agenda';
import Tools from './components/Tools';
import Contact from './components/Contact';
import BlogList from './components/BlogList';  // Import BlogList component
import AdminPostForm from './components/AdminPostForm'; 

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/agenda" element={<Agenda />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/blog-list" element={<BlogList />} /> {/* BlogList route */}
                <Route path="/admin/post-form" element={<AdminPostForm />} /> {/* AdminPostForm route */}
            </Routes>
        </Router>
    );
};

export default App;