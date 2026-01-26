import { Form, Link, Outlet, useNavigation } from "react-router-dom";
import { useStore } from "../store";

export default function Layout() {
  console.log("Layout");
  const { signedIn, signIn, signOut } = useStore();
  const { state } = useNavigation();
  return (
    <>
      <h1>Layout</h1>
      <p>Signed in : {signedIn ? "true" : "false"}</p>
      {signedIn ? (
        <>
          <button onClick={signOut}>Sign out (store)</button>
          <Form
            action="/signout"
            method="post"
            replace
            style={{ display: "inline" }}
          >
            <button type="submit">Sign out (action)</button>
          </Form>
          <Link to="/signout">Sign out (loader)</Link>
        </>
      ) : (
        <>
          <button onClick={signIn}>Sign in (store)</button>
          <Form
            action="/signin"
            method="post"
            replace
            style={{ display: "inline" }}
          >
            <button type="submit">Sign in (action)</button>
          </Form>
          <Link to="/signin">Sign in (loader)</Link>
        </>
      )}
      {state === "idle" ? <Outlet /> : <p>Loading…</p>}
    </>
  );
}
