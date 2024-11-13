import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BlogPost from './BlogPost';
import Navbar from './Navbar';
import Footer from './Footer';

const BlogList = () => {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await axios.get('http://localhost:5000/api/posts'); // Fetching data from the backend
                setPosts(res.data); // Setting the posts to state
            } catch (err) {
                console.error("Error fetching posts:", err);
                setError('Failed to fetch posts'); // Handling errors
            }
        };
        fetchPosts();
    }, []);

    return (
        <div>
            <Navbar /> {/* Render Navbar */}

            <div className="blog-list">
                {error && <p>{error}</p>} {/* Display error message */}
                {posts.length > 0 ? (
                    posts.map((post) => (
                        <BlogPost key={post._id} post={post} /> // Pass each post to the BlogPost component
                    ))
                ) : (
                    <p>No posts available</p>
                )}
            </div>

            <Footer /> {/* Render Footer */}
        </div>
    );
};

export default BlogList;