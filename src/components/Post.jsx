import { Link, useLoaderData } from "react-router-dom";

export default function Post() {
  console.log("Post");
  const { title, body } = useLoaderData();
  return (
    <>
      <h2>{title}</h2>
      <p>{body}</p>
      <Link to="/posts">‹ Back</Link>
    </>
  );
}
