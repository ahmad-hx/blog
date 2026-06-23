import API from "../api/api";

const addComment = async () => {
  const token = localStorage.getItem("token");

  await API.post(
    `/posts/${postId}/comments`,
    { text },
    { headers: { Authorization: `Bearer ${token}` } }
  );
};
import { useState } from "react";
import "./CommentBox.css";

export default function CommentBox() {
  const [comment, setComment] = useState("");

  const comments = [
    { id: 1, user: "Ravi", text: "Great article!" },
    { id: 2, user: "Anjali", text: "Very helpful, thanks!" },
  ];

  return (
    <div className="comment-box">
      <h3>Comments</h3>

      {comments.map((c) => (
        <div key={c.id} className="comment">
          <strong>{c.user}</strong>
          <p>{c.text}</p>
        </div>
      ))}

      <textarea
        placeholder="Write a comment..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />

      <button>Post Comment</button>
    </div>
  );
}