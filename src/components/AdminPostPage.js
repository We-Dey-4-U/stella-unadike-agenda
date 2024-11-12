// src/components/AdminPostPage.js
import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './BlogPage.css';

const AdminPostPage = () => {
    const [newPost, setNewPost] = useState({ title: '', content: '', image: null });

    const handleNewPostSubmit = () => {
        // Handle the post submission logic (save it to a server or state)
        // Add the new post to the blog list (you would typically send it to an API here)
        console.log(newPost);
        setNewPost({ title: '', content: '', image: null }); // Clear the form
    };

    return (
        <div>
            <Navbar />
            <div className="new-post-form">
                <h3>Admin Post a New Blog</h3>
                <input
                    type="text"
                    placeholder="Title"
                    value={newPost.title}
                    onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                />
                <textarea
                    placeholder="Content"
                    value={newPost.content}
                    onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                />
                <input
                    type="file"
                    onChange={(e) => setNewPost({ ...newPost, image: e.target.files[0] })}
                />
                <button onClick={handleNewPostSubmit}>Post</button>
            </div>
            <Footer />
        </div>
    );
};

export default AdminPostPage;