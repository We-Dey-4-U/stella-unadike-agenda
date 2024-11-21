import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { formatDistanceToNow } from 'date-fns';
import AdComponent from './AdComponent';
import './BlogPost.css';

const BlogPost = ({ post, isLoggedIn, onLogin }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [replyIndex, setReplyIndex] = useState(null);
  const [newReply, setNewReply] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Log the post object for debugging purposes
  useEffect(() => {
    console.log('Post object:', post);
  }, [post]);

  // Helper function to fetch the authentication token
  const getAuthToken = () => {
    const token = localStorage.getItem('token');
    if (!token) {
      console.error('No token found. Please log in.');
      return null;
    }

    // Validate the token format (assuming it's JWT)
    const tokenParts = token.split('.');
    if (tokenParts.length !== 3) {
      console.error('Invalid token format detected.');
      return null;
    }

    console.log('Retrieved token:', token); // Debugging
    return token;
  };

  // Fetch comments when the post ID changes
  useEffect(() => {
    const fetchComments = async () => {
      if (!post?._id) {
        setError('Invalid or missing post ID.');
        return;
      }

      const authToken = getAuthToken();
      if (!authToken) {
        setError('You need to log in to view comments.');
        return;
      }

      //https://blogserver-mb2q.vercel.app
      //http://localhost:5000

      setLoading(true);
      setError('');
      try {
        const response = await axios.get(
          `https://blogserver-mb2q.vercel.app/api/comments/${post._id}`,
          { headers: { Authorization: `Bearer ${authToken}` } }
        );
        setComments(Array.isArray(response.data) ? response.data : []); // Ensuring comments is always an array
      } catch (err) {
        console.error('Error fetching comments:', err);
        setError('Could not fetch comments. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchComments();
  }, [post?._id]);

  // Handle posting a comment or reply
  const handleCommentAction = async (type, content, commentId = null) => {
    if (!content.trim()) {
      setError('Comment or reply cannot be empty.');
      return;
    }

    const authToken = getAuthToken();
    if (!authToken) {
      setError('You must be logged in to post.');
      return;
    }

    setError('');
    try {
      // Get the username from the auth token (you should store it in localStorage or decode it from the JWT token)
      const decodedToken = JSON.parse(atob(authToken.split('.')[1]));  // Decode JWT token
      const username = decodedToken?.username;  // Safe access to username

      if (!username) {
        setError('Username is required');
        return;
      }

      const endpoint =
        type === 'comment'
          ? `https://blogserver-mb2q.vercel.app/api/comments/${post._id}`
          : `https://blogserver-mb2q.vercel.app/api/comments/${commentId}/replies`;

      const response = await axios.post(
        endpoint,
        { username, content },  // Send both username and content in the request body
        { headers: { Authorization: `Bearer ${authToken}` } }
      );

      if (type === 'comment') {
        setComments((prev) => [...prev, response.data]);
        setNewComment('');
      } else {
        setComments((prev) =>
          prev.map((comment) =>
            comment._id === commentId
              ? { ...comment, replies: [...comment.replies, response.data] }
              : comment
          )
        );
        setNewReply('');
        setReplyIndex(null);
      }
    } catch (err) {
      console.error(`Error posting ${type}:`, err);
      setError(err.response?.data?.message || 'Failed to post. Please try again.');
    }
  };

  // Render content paragraphs interspersed with ads
  const renderContentWithAds = (content) => {
    const paragraphs = content?.split('\n\n').filter((p) => p.trim()) || [];
    return paragraphs.map((paragraph, index) => (
      <React.Fragment key={index}>
        <p>{paragraph}</p>
        {(index + 1) % 2 === 0 && (
          <div className="ad-container">
            <AdComponent />
          </div>
        )}
      </React.Fragment>
    ));
  };

  // Safely render embedded media
  const renderMedia = (embedCode) => {
    if (!embedCode) return null;
    return <div className="media-item" dangerouslySetInnerHTML={{ __html: embedCode }} />;
  };

  if (!post) {
    return <div>Loading post...</div>;
  }

  return (
    <div className="blog-post">
      <h2>{post?.title || 'No Title Available'}</h2>
      {post?.image && (
        <figure>
          <img src={`http://localhost:5000${post.image}`} alt={post?.title} className="post-image" />
          <figcaption>{post?.title}</figcaption>
        </figure>
      )}
      <div className="post-content">{renderContentWithAds(post?.content)}</div>
      <p>Posted {formatDistanceToNow(new Date(post?.createdAt), { addSuffix: true })}</p>
      <p>
        <strong>Author:</strong> {post?.author || 'Unknown'}
      </p>
      <div className="media-container">
        {post?.videoUrl && (
          <div className="media-item">
            <video src={post.videoUrl} controls />
          </div>
        )}
        {renderMedia(post?.youtubeEmbed)}
        {renderMedia(post?.facebookEmbed)}
        {renderMedia(post?.twitterEmbed)}
        {renderMedia(post?.instagramEmbed)}
      </div>
      <div className="comments">
        <h3>Comments</h3>
        {error && <p className="error">{error}</p>}
        {loading ? (
          <p>Loading comments...</p>
        ) : (
          comments.map((comment, index) => (
            <div key={comment._id} className="comment">
              <p>
                <strong>{comment.username}</strong> -{' '}
                {formatDistanceToNow(new Date(comment.createdAt), { addSuffix: true })}
              </p>
              <p>{comment.content}</p>
              <button onClick={() => setReplyIndex(index === replyIndex ? null : index)}>
                Reply
              </button>
              {replyIndex === index && (
                <div className="reply-input">
                  <textarea
                    value={newReply}
                    onChange={(e) => setNewReply(e.target.value)}
                    placeholder="Write your reply"
                  />
                  <button onClick={() => handleCommentAction('reply', newReply, comment._id)}>
                    Post Reply
                  </button>
                </div>
              )}
              {comment.replies.map((reply) => (
                <div key={reply._id} className="reply">
                  <p>
                    <strong>{reply.username}</strong> -{' '}
                    {formatDistanceToNow(new Date(reply.createdAt), { addSuffix: true })}
                  </p>
                  <p>{reply.content}</p>
                </div>
              ))}
            </div>
          ))
        )}
        {isLoggedIn ? (
          <div className="comment-input">
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="What are your thoughts?"
            />
            <button onClick={() => handleCommentAction('comment', newComment)}>Comment</button>
          </div>
        ) : (
          <p>
            Please{' '}
            <button onClick={onLogin} className="login-button">
              log in
            </button>{' '}
            to comment.
          </p>
        )}
      </div>
    </div>
  );
};

export default BlogPost;