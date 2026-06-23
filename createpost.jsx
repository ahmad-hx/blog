// src/pages/CreatePost.jsx
import API from "../api/api";

const handleCreatePost = async () => {
  const token = localStorage.getItem("token");

  await API.post(
    "/posts",
    { title, content },
    { headers: { Authorization: `Bearer ${token}` } }
  );
};
export default function CreatePost() {
  return (
    <div>
      <h2>Create Blog</h2>
      <input placeholder="Title" /><br />
      <textarea placeholder="Content" /><br />
      <button>Create</button>
    </div>
  );
}