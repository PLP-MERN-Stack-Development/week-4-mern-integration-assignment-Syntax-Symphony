// src/pages/Home.jsx
import React, { useEffect, useState } from "react";
import { getPosts, deletePost } from "../services/postService";
import PostForm from "../components/PostForm";

const Home = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const data = await getPosts();
    setPosts(data);
  };

  const handleDelete = async (id) => {
    await deletePost(id);
    fetchPosts();
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="max-w-2xl mx-auto p-6 text-white">
      <h1 className="text-3xl font-bold mb-6">📝 MERN Blog</h1>

      <div className="mb-8">
        <PostForm onPostCreated={fetchPosts} />
      </div>

      <h2 className="text-2xl font-semibold mb-4">All Posts</h2>
      {posts.length === 0 ? (
        <p className="text-gray-400">No posts yet.</p>
      ) : (
        posts.map((post) => (
          <div
            key={post._id}
            className="bg-gray-800 p-4 rounded shadow mb-4"
          >
            <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
            <p className="text-gray-300 mb-3">{post.content}</p>
            <button
              onClick={() => handleDelete(post._id)}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
            >
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default Home;
