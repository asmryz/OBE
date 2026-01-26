import { Link, useLoaderData } from "react-router-dom";

export default function Posts() {
  console.log("Posts");
  const { posts } = useLoaderData();
  return (
    <>
      <h2>Posts</h2>
      <ul>
        {posts.map(({ id, title }) => (
          <li key={id}>
            <Link to={`/posts/${id}`}>{title}</Link>
          </li>
        ))}
      </ul>
      <Link to="/">‹ Back</Link>
    </>
  );
}
