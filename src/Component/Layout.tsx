import { Outlet, useLocation } from "react-router-dom";
import NavBar from "./NavBar";
import ScrollToTop from "../hooks/ScrollToTop";
import FloatingSvgBackground from "./FloatingSvgBackground";

function Layout() {
  const { pathname } = useLocation();
  const isLandingPage = pathname === "/";
  const offsetForPublicPolicy = pathname === "/digital";

  return (
    <div className="relative min-h-screen bg-slate-50">
      {!isLandingPage && <FloatingSvgBackground offsetLeft={offsetForPublicPolicy} />}
      <ScrollToTop />
      <div className="relative z-10">
        <NavBar />
        <Outlet />
      </div>
    </div>
  );
}
export default Layout;
