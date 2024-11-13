// CommentSection.js
import React, { useState } from 'react';
import axios from 'axios';

const CommentSection = ({ postId }) => {
    const [comment, setComment] = useState('');

    const handleCommentSubmit = async (e) => {
        e.preventDefault();
        await axios.post(`/api/posts/${postId}/comment`, { content: comment, author: "User" });
        setComment('');
    };

    return (
        <div>
            <form onSubmit={handleCommentSubmit}>
                <input type="text" value={comment} onChange={(e) => setComment(e.target.value)} placeholder="Comment" />
                <button type="submit">Add Comment</button>
            </form>
        </div>
    );
};

export default CommentSection;