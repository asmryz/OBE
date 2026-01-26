import { Navigate, Outlet } from "react-router-dom";
import { useStore } from "../store";

export default function ProtectedRoute() {
  const { signedIn } = useStore();
  return signedIn ? <Outlet /> : <Navigate to="/" />;
}
