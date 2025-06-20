import { Briefcase, CircleUser, FolderKanban, Home, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router";
import { setSelectedTab } from "../../../features/tabSlice/tabSlice";
import { useMotionValueEvent, useScroll } from "motion/react";
import { setCursorType } from "../../../features/cursorType/cursorType";

function Navbar() {
  const selectedTab = useSelector((state) => state.tabSlice.selectedTab);
  const { scrollY } = useScroll();
  const [scrollDirection, setScrollDirection] = useState("up");
  const location = useLocation();
  const dispatch = useDispatch();

  useMotionValueEvent(scrollY, "change", (current) => {
    const diff = current - scrollY.getPrevious();
    if (Math.abs(diff) < 5) return; // prevent micro scrolls
    setScrollDirection(diff > 0 ? "down" : "up");
  });

  useEffect(() => {
    const isScrollable = document.body.scrollHeight > window.innerHeight;
    if (!isScrollable) {
      setScrollDirection("up");
    }
  }, [location.pathname]);

  return (
    <nav
      className={`fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex h-11 w-[90%] md:w-[40%] rounded-xl justify-evenly items-center gap-x-4 mx-auto bg-rnr-light-surface/40 border-rnr-dark-border border-1 backdrop-blur-md transition-all duration-700 ease-in-out cursor-none
        ${scrollDirection === "down" ? "translate-y-24 opacity-0" : "translate-y-0 opacity-100"}
      `}
    >
      {[
        { to: "/", icon: Home, tab: "home" },
        { to: "/about", icon: CircleUser, tab: "about" },
        { to: "/services", icon: Briefcase, tab: "services" },
        { to: "/projects", icon: FolderKanban, tab: "projects" },
        { to: "/contact", icon: Mail, tab: "contact" },
      ].map(({ to, icon: Icon, tab }) => (
        <NavLink
          key={tab}
          to={to}
          className={({ isActive }) =>
            `flex items-center transition-transform duration-300 ease-in-out cursor-none ${
              isActive
                ? "text-rnr-dark-accent scale-110"
                : "text-rnr-dark-accent-alt"
            } hover:text-rnr-dark-accent-hover`
          }
          onClick={() => dispatch(setSelectedTab(tab))}
        >
          <Icon
            onMouseEnter={() => dispatch(setCursorType("arrow"))}
            onMouseLeave={() => dispatch(setCursorType("default"))}
            className="w-6 h-6"
          />
        </NavLink>
      ))}
    </nav>
  );
}

export default Navbar;
