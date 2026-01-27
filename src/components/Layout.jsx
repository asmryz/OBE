import { Form, Link, Outlet, useNavigation } from "react-router-dom";
import { useStore } from "../store";
import { Button } from '@mantine/core'
import { Header } from "./Header";

export default function Layout() {
    console.log("Layout");
    const { signedIn, signIn, signOut } = useStore();
    const { state } = useNavigation();
    return (
        <>
            <Header />
            <h1>Layout</h1>
            <p>Signed in : {signedIn ? "true" : "false"}</p>
            {signedIn ? (
                <>
                    <Button onClick={signOut} variant="default">Sign out (store)</Button>
                    <Form
                        action="/signout"
                        method="post"
                        replace
                        style={{ display: "inline" }}
                    >
                        <Button type="submit" variant="outline">Sign out (action)</Button>
                    </Form>
                    <Link to="/signout">Sign out (loader)</Link>
                </>
            ) : (
                <>
                    <Button onClick={signIn} variant="default">Sign in (store)</Button>
                    <Form
                        action="/signin"
                        method="post"
                        replace
                        style={{ display: "inline" }}
                    >
                        <Button type="submit">Sign in (action)</Button>
                    </Form>
                    <Link to="/signin">Sign in (loader)</Link>
                </>
            )}
            {state === "idle" ? <Outlet /> : <p>Loading…</p>}
            <Button variant="default">Button</Button>
        </>
    );
}
