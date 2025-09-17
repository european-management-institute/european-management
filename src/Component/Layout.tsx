import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import ScrollToTop from "../hooks/ScrollToTop";

function Layout() {
  return (
    <>
      <ScrollToTop />
      <NavBar />
      <Outlet />
    </>
  );
}
export default Layout;
