import { Link } from "react-router-dom";
import "./PostCard.css";

export default function PostCard({ post }) {
  return (
    <div className="post-card">
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <small>By {post.author}</small>

      <Link to={`/post/${post.id}`} className="read-more">
        Read More →
      </Link>
    </div>
  );
}