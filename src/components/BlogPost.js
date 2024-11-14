import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import AdComponent from './AdComponent'; // Import the ad component
import './BlogPost.css';

const BlogPost = ({ post }) => {
    // Function to insert ads after every second paragraph
    const renderContentWithAds = (content) => {
        const paragraphs = content.split("\n\n"); // Split content by paragraph
        const contentWithAds = [];

        paragraphs.forEach((paragraph, index) => {
            // Add paragraph to the content
            contentWithAds.push(<p key={`p-${index}`}>{paragraph}</p>);

            // Insert an AdComponent after every second paragraph
            if ((index + 1) % 2 === 0) {
                contentWithAds.push(
                    <div key={`ad-${index}`} className="ad-container">
                        <AdComponent /> {/* Render the AdComponent */}
                    </div>
                );
            }
        });

        return contentWithAds;
    };

    return (
        <div className="blog-post">
            <h2>{post.title}</h2>

            {/* Conditionally render image if available    http://localhost:5000  https://blogserver-mb2q.vercel.app */}
          {/* Display image with caption */}
          {post.image && (
                <figure className="post-image-figure">
                    <img src={`https://blogserver-mb2q.vercel.app${post.image}`} alt={post.title} className="post-image" />
                    <figcaption className="post-image-caption">{post.title}</figcaption> {/* Caption below image */}
                </figure>
            )}
            
            {/* Render content with ads inserted */}
            <div className="post-content">{renderContentWithAds(post.content)}</div>

             {/* Display the relative time */}
             <p className="post-time">
                Posted {formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })}
            </p>
            
            
            <p><strong>Author:</strong> {post.author}</p>

            {/* Conditionally render video if available */}
            {post.videoUrl && <video src={post.videoUrl} controls className="post-video" />}

            {/* Embed YouTube video if available */}
            {post.youtubeEmbed && <div className="embed-container" dangerouslySetInnerHTML={{ __html: post.youtubeEmbed }} />}

            {/* Embed Facebook post if available */}
            {post.facebookEmbed && <div className="embed-container" dangerouslySetInnerHTML={{ __html: post.facebookEmbed }} />}

            {/* Embed Twitter post if available */}
            {post.twitterEmbed && <div className="embed-container" dangerouslySetInnerHTML={{ __html: post.twitterEmbed }} />}

            {/* Embed Instagram post if available */}
            {post.instagramEmbed && <div className="embed-container" dangerouslySetInnerHTML={{ __html: post.instagramEmbed }} />}
        </div>
    );
};

export default BlogPost;