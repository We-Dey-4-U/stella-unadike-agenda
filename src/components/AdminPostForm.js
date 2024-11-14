import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import Footer from './Footer';
import './AdminPostForm.css';

const AdminPostForm = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('');
    const [image, setImage] = useState(null);
    const [videoUrl, setVideoUrl] = useState('');
    const [youtubeEmbed, setYoutubeEmbed] = useState('');
    const [facebookEmbed, setFacebookEmbed] = useState('');
    const [twitterEmbed, setTwitterEmbed] = useState('');
    const [instagramEmbed, setInstagramEmbed] = useState('');

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    // Functions to convert URLs to embed codes
    const generateYouTubeEmbed = (url) => {
        const videoIdMatch = url.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([\w-]{11})/);
        if (videoIdMatch) {
            const videoId = videoIdMatch[1];
            return `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
        }
        return url;
    };

    const generateFacebookEmbed = (url) => {
        const postIdMatch = url.match(/(?:https?:\/\/)?(?:www\.)?facebook\.com\/[^\/]+\/posts\/(\d+)/);
        if (postIdMatch) {
            const postId = postIdMatch[1];
            return `<iframe src="https://www.facebook.com/plugins/post.php?href=${encodeURIComponent(url)}" width="500" height="700" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true"></iframe>`;
        }
        return url;
    };

    const generateTwitterEmbed = (url) => {
        const tweetIdMatch = url.match(/(?:https?:\/\/)?(?:www\.)?twitter\.com\/(?:#!\/)?(\w+)\/status(es)?\/(\d+)/);
        if (tweetIdMatch) {
            const tweetId = tweetIdMatch[3];
            return `<blockquote class="twitter-tweet"><a href="https://twitter.com/user/status/${tweetId}"></a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>`;
        }
        return url;
    };

    const generateInstagramEmbed = (url) => {
        const postIdMatch = url.match(/(?:https?:\/\/)?(?:www\.)?instagram\.com\/p\/([\w-]+)/);
        if (postIdMatch) {
            const postId = postIdMatch[1];
            return `<blockquote class="instagram-media" data-instgrm-permalink="${url}" data-instgrm-version="14"></blockquote><script async src="//www.instagram.com/embed.js"></script>`;
        }
        return url;
    };

    const handlePostSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('title', title);
        formData.append('content', content);
        formData.append('author', author);
        formData.append('videoUrl', videoUrl);

        //http://localhost:5000
        //https://blogserver-mb2q.vercel.app
        // Generate embed codes for each platform
        formData.append('youtubeEmbed', generateYouTubeEmbed(youtubeEmbed));
        formData.append('facebookEmbed', generateFacebookEmbed(facebookEmbed));
        formData.append('twitterEmbed', generateTwitterEmbed(twitterEmbed));
        formData.append('instagramEmbed', generateInstagramEmbed(instagramEmbed));
        
        if (image) {
            formData.append('image', image);
        }

        try {
            const response = await axios.post('https://blogserver-mb2q.vercel.app/api/posts', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log(response.data);
        } catch (error) {
            console.error('Error creating post:', error);
        }
    };

    return (
        <div>
            <Navbar />

            <div className="admin-post-form-page">
                <h1>Create Post</h1>
                <form onSubmit={handlePostSubmit}>
                    <input
                        type="text"
                        placeholder="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                    <textarea
                        placeholder="Content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Author"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        required
                    />
                    <input type="file" onChange={handleImageChange} />
                    <input
                        type="text"
                        placeholder="Video URL (Optional)"
                        value={videoUrl}
                        onChange={(e) => setVideoUrl(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="YouTube URL or Embed Code (Optional)"
                        value={youtubeEmbed}
                        onChange={(e) => setYoutubeEmbed(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Facebook URL or Embed Code (Optional)"
                        value={facebookEmbed}
                        onChange={(e) => setFacebookEmbed(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Twitter/X URL or Embed Code (Optional)"
                        value={twitterEmbed}
                        onChange={(e) => setTwitterEmbed(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Instagram URL or Embed Code (Optional)"
                        value={instagramEmbed}
                        onChange={(e) => setInstagramEmbed(e.target.value)}
                    />
                    <button type="submit">Create Post</button>
                </form>
            </div>

            <Footer />
        </div>
    );
};

export default AdminPostForm;