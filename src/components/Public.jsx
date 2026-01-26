import { Link } from "react-router-dom";
import { useStore } from "../store";

export default function Public() {
  console.log("Public");
  const { signedIn } = useStore();
  return (
    <>
      <h2>Public</h2>
      <Link to="/posts">Posts (private)</Link> (
      {signedIn ? "accessible" : "not accessible"})
    </>
  );
}
