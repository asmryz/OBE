import { Form, Link, Outlet, useNavigation } from "react-router-dom";
import { useStore } from "../store";
import { Button } from '@mantine/core'
import { Header } from "./Header";
import MainMenu from "./MainMenu";

export default function Layout() {
    console.log("Layout");
    const { signedIn, signIn, signOut } = useStore();
    const { state } = useNavigation();
    return (
        <>
            <Header />
            
            {state === "idle" ? <Outlet /> : <p>Loading…</p>}
        </>
    );
}
