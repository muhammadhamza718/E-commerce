"use client";
import React, { useState } from 'react';

export default function CommentSection() {
    // State for managing login status
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // State for managing the comment input
    const [comment, setComment] = useState('');

    // Fake initial comments
    const [comments, setComments] = useState([
        { id: 1, name: 'mandy-zhang', text: 'Great product!', profilePic: '/mandy-zhang.jpg' },
        { id: 2, name: 'Michael Brown', text: 'I love this product!', profilePic: '/michael-brown.jpg' },
        { id: 3, name: 'Sophia Davis', text: 'Excellent quality!', profilePic: '/sophia-davis.jpg' },
    ]);

    // Handle new comment submission
    const handleSubmit = (e : React.FormEvent) => {
        e.preventDefault();
        if (!isLoggedIn) {
            alert('Please log in to comment.');
            return;
        }

        if (comment.trim() === '') {
            alert('Comment cannot be empty!');
            return;
        }

        // Add the new comment to the list
        const newComment = {
            id: comments.length + 1,
            name: 'Logged-in User',
            text: comment,
            profilePic: 'https://via.placeholder.com/40', // Placeholder for logged-in user
        };

        setComments([newComment, ...comments]);
        setComment(''); // Clear the input field
    };

    return (
        <section id="testimonials" className=" pb-16 px-4 bg-gradient-to-br from-gray-700 to-gray-900">
            <div className="container mx-auto">
                <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-4xl font-bold text-center mb-6">Comments</h2>

                {/* Comment input form */}
                <form onSubmit={handleSubmit} className="mb-6">
                    <textarea
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        placeholder={isLoggedIn ? 'Write a comment...' : 'Log in to leave a comment'}
                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring bg-gray-800 focus:ring-blue-300"
                        rows={3}
                        disabled={!isLoggedIn}
                    ></textarea>
                    {!isLoggedIn && (
                        <p className="text-red-500 text-sm mt-2">
                            You must <span className="font-semibold">log in</span> to post a comment.
                        </p>
                    )}
                    <button
                        type="submit"
                        className={`mt-4 px-6 py-2 text-white rounded-lg ${
                            isLoggedIn ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-400 cursor-not-allowed'
                        }`}
                        disabled={!isLoggedIn}
                    >
                        Comment
                    </button>
                </form>

                {/* Existing comments */}
                <div className="space-y-4">
                    {comments.map((c) => (
                        <div
                            key={c.id}
                            className="flex items-start space-x-4 p-4 bg-gray-800 shadow rounded-lg"
                        >
                            <img
                                src={c.profilePic}
                                alt={c.name}
                                className="w-16 h-16 rounded-full"
                            />
                            <div>
                                <h4 className="font-semibold text-white">{c.name}</h4>
                                <p className="text-gray-400">{c.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
