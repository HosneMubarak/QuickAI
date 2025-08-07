import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

const Layout = () => {
  const { isAuthenticated } = useSelector((store) => store.user);
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default Layout;
