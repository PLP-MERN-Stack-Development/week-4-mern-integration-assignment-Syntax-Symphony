// src/components/PostForm.jsx
import React, { useState } from "react";
import { createPost } from "../services/postService";

const PostForm = ({ onPostCreated }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !content) return alert("Please fill in both fields");

    await createPost({ title, content });
    setTitle("");
    setContent("");
    if (onPostCreated) onPostCreated();
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-900 p-4 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Create New Post</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-2 mb-3 border border-gray-700 rounded bg-gray-800 text-white"
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="w-full p-2 mb-3 border border-gray-700 rounded bg-gray-800 text-white"
        rows={4}
      />
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
      >
        Post
      </button>
    </form>
  );
};

export default PostForm;
