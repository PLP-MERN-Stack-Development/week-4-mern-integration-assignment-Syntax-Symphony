import axios from 'axios';

const API_URL = 'http://localhost:5000/api/posts';

export const fetchPosts = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

export const createPost = async (postData) => {
  const res = await axios.post(API_URL, postData);
  return res.data;
};

export const deletePost = async (postId) => {
  const res = await axios.delete(`${API_URL}/${postId}`);
  return res.data;
};
