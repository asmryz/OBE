import "./App.css";
import { createBrowserRouter, redirect, RouterProvider } from "react-router-dom";
import { store } from "./store";
import Public from "./components/Public";
import ProtectedRoute from "./components/ProtectedRoute";
import Posts from "./components/Posts";
import Post from "./components/Post";
import Layout from "./components/Layout";
import Login from "./components/Login";
import { Create } from "./components/Create";

const layoutLoader = async () => {
  console.log("layoutLoader");
  const { initialized } = store.getState();
  if (!initialized) {
    console.log("initialize app");
    await new Promise((r) => setTimeout(r, 2000));
    store.setState({ initialized: true });
  }
  return null;
};

const postsLoader = async () => {
  console.log("postsLoader");
  return await fetch("https://dummyjson.com/posts").then((res) => res.json());
};

const postLoader = async ({ params: { id } }) => {
  console.log("postLoader");
  return await fetch(`https://dummyjson.com/posts/${id}`).then((res) =>
    res.json(),
  );
};

const signInAction = () => {
  console.log("signInAction");
  store.getState().signIn();
  return redirect("/");
};

const signInLoader = () => {
  console.log("signInLoader");
  store.getState().signIn();
  return redirect("/");
};

const signOutAction = () => {
  console.log("signOutAction");
  store.getState().signOut();
  return redirect("/");
};

const signOutLoader = () => {
  console.log("signOutLoader");
  store.getState().signOut();
  return redirect("/");
};

// const protectedRouteLoader = () => {
//   const { signedIn } = store.getState();
//   return signedIn ? null : redirect("/");
// };

const router = createBrowserRouter([
  {
    Component: Layout,
    loader: layoutLoader,
    children: [
      {
        path: "/",
        Component: Login,
      },
      {
        path: "/create",
        Component: Create,
      },
      {
        // Component guard
        Component: ProtectedRoute,
        // Loader guard
        // loader: protectedRouteLoader,
        children: [
          {
            path: "posts",
            loader: postsLoader,
            Component: Posts,
          },
          {
            path: "posts/:id",
            loader: postLoader,
            Component: Post,
          },
        ],
      },
      {
        path: "signin",
        action: signInAction,
        loader: signInLoader,
      },
      {
        path: "signout",
        action: signOutAction,
        loader: signOutLoader,
      },
    ],
  },
]);

export default function App() {
  console.log("App");
  return <RouterProvider router={router} fallbackElement={<p>Loading…</p>} />;
}


// import { Button, Container, Title, Text, Table } from '@mantine/core'
// import { TableArea } from './components/TableArea'
// import UsersTable from './components/UsersTable'

// export default function App() {
//   return (
//     <Container size="lg" mt="xl">
//       <Title order={2}>Vite + React + Mantine 🚀</Title>
//       <Text c="dimmed" mt="sm">
//         Mantine UI is now working perfectly.
//       </Text>

//       {/* <TableArea /> */}
//       <UsersTable />
//     </Container>
//   )
// }
