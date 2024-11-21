import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet'; // Import Helmet for dynamic meta tags
import BlogPost from './BlogPost';
import Navbar from './Navbar';
import Footer from './Footer';

const BlogList = ({ isLoggedIn, onLogin }) => {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);

    //http://localhost:5000
    //https://blogserver-mb2q.vercel.app

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await axios.get('http://localhost:5000/api/posts');
                setPosts(res.data);
            } catch (err) {
                console.error("Error fetching posts:", err);
                setError('Failed to fetch posts');
            }
        };
        fetchPosts();
    }, []);

    // Set the default or most recent post image for meta tags
    const defaultImage = "https://stella-unadike-agenda-9xi3.vercel.app/images/blog-list-preview.jpg";
    const imageUrl = posts.length > 0 ? `https://blogserver-mb2q.vercel.app${posts[0].image}` : defaultImage;

    return (
        <div>
            {/* Helmet for SEO and Social Sharing Meta Tags */}
            <Helmet>
                <title>Serial Reporter</title>
                <meta property="og:title" content="Explore Our Blog List" />
                <meta property="og:description" content="Discover insightful articles and updates on our latest blogs." />
                <meta property="og:image" content={imageUrl} />
                <meta property="og:url" content="https://stella-unadike-agenda-9xi3.vercel.app/blog-list" />

                {/* Twitter Card Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Explore Our Blog List" />
                <meta name="twitter:description" content="Read our latest blogs for in-depth articles and resources." />
                <meta name="twitter:image" content={imageUrl} />
            </Helmet>

            
            <div className="blog-list">
                {error && <p>{error}</p>}
                {posts.length > 0 ? (
                    posts.map((post) => (
                        <BlogPost
                            key={post._id}
                            post={post}
                            isLoggedIn={isLoggedIn} // Pass isLoggedIn to BlogPost
                            onLogin={onLogin} // Pass onLogin to BlogPost
                        />
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