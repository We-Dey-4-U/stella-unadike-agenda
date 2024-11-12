import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Optional: If using axios

const Blog = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_KEY = '5f058f2e4a35495998ca5e0a71c9c27b'; // Replace with your actual NewsAPI key  ///5f058f2e4a35495998ca5e0a71c9c27b
  const API_URL = `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${API_KEY}`;

  // Fetch the news data
  useEffect(() => {
    axios.get(API_URL)
      .then((response) => {
        setNews(response.data.articles);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []); // The empty array ensures this effect only runs once on component mount

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching news: {error.message}</p>;
  }

  return (
    <div className="blog-section">
      <h2>Latest Nigerian News</h2>
      {news.length === 0 ? (
        <p>No news available at the moment.</p>
      ) : (
        <div className="news-list">
          {news.map((article, index) => (
            <div key={index} className="news-item">
              <h3>{article.title}</h3>
              <p>{article.description}</p>
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                Read more
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Blog;