import CommentBox from "../components/CommentBox";
import "./PostDetails.css";

export default function PostDetails() {
  const post = {
    title: "Why I Started Blogging",
    content:
      "Blogging allows me to share my knowledge, ideas, and experiences with the world. It also helps me improve my communication skills.",
    author: "Admin",
    date: "June 2026",
  };

  return (
    <div className="post-details">
      <h1>{post.title}</h1>
      <p className="meta">
        By {post.author} • {post.date}
      </p>

      <p className="content">{post.content}</p>

      <CommentBox />
    </div>
  );
}
API.delete(`/posts/${id}`, {
  headers: { Authorization: `Bearer ${token}` },
});
<CommentBox postId={post._id} />