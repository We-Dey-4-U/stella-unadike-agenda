import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet'; // Dynamic meta tags
import Navbar from './Navbar'; // Optional Navbar component
import Footer from './Footer'; // Optional Footer component
import './BlogList.css'; 


// Add your styles here          <p>{post.summary || post.content.substring(0, 100)}...</p>

const BlogList = ({ isLoggedIn, onLogin }) => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
      const fetchPosts = async () => {
          try {
              const res = await axios.get('https://serialreporter-oobf.vercel.app/api/posts');
              setPosts(res.data);
          } catch (err) {
              console.error("Error fetching posts:", err);
              setError('Failed to fetch posts');
          }
      };
      fetchPosts();
  }, []);

  const defaultImage = "https://your-default-image.jpg";
  const imageUrl = posts.length > 0 ? posts[0]?.image || defaultImage : defaultImage;

  return (
      <>
          <Helmet>
              <title>Blog List</title>
              <meta name="description" content="Read our latest blogs on various topics." />
              <meta property="og:image" content={imageUrl} />
          </Helmet>
         
          <div className="blog-list">
              <h1>Latest News</h1>
              {error && <p>{error}</p>}
              {posts.length > 0 ? (
                  posts.map((post) => (
                      <div key={post._id} className="post-preview">
                          <Link to={`/post/${post._id}`}>
                              <img src={post.image || defaultImage} alt={post.title} />
                          </Link>
                          <h2>{post.title}</h2>
                      </div>
                  ))
              ) : (
                  <p>No posts available</p>
              )}
          </div>
          <Footer />
      </>
  );
};

export default BlogList;