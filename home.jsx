import PostCard from "../components/PostCard";
import "./Home.css";

export default function Home() {
  const posts = [
    {
      id: 1,
      title: "Why I Started Blogging",
      content: "Blogging helps share knowledge and ideas...",
      author: "Admin",
    },
    {
      id: 2,
      title: "React for Beginners",
      content: "React is a powerful library for UI...",
      author: "John",
    },
  ];

  return (
    <div className="home">
      <h1>Latest Blogs</h1>

      <div className="posts">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}