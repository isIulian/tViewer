import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import HeaderNavItem from "./HeaderNavItem";

import { maxWidth } from "@/styles";
import { cn } from "@/lib/utils.js";

const navLinks = [
  {
    title: "home",
    path: "/",
  },
  {
    title: "movies",
    path: "/resources/movie",
  },
  {
    title: "tv series",
    path: "/resources/tv-show",
  },
  {
    title: "manga",
    path: "/resources/manga",
  },
  {
    title: "follow",
    path: "/tracks/",
  },
  {
    title: "dash",
    path: "/dashboard/",
  }
];

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [isNotFoundPage, setIsNotFoundPage] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleBackgroundChange = () => {
      const body = document.body;
      if (
        window.scrollY > 0 ||
        (body.classList.contains("no-scroll") &&
          parseFloat(body.style.top) * -1 > 0)
      ) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    };

    window.addEventListener("scroll", handleBackgroundChange);

    return () => {
      window.removeEventListener("scroll", handleBackgroundChange);
    };
  }, []);

  useEffect(() => {
    if (location.pathname.split("/").length > 3) {
      setIsNotFoundPage(true);
    } else {
      setIsNotFoundPage(false);
    }
  }, [location.pathname]);

  return (
    <header
      className={cn(
        `md:py-[16px] py-[14.5px] fixed top-0 left-0 w-full z-10 transition-all duration-50 flex justify-between  backdrop-filter backdrop-blur-lg`
      )}
      style={{ height: "60px" }}
    >
      <svg
        height="36"
        viewBox="0 0 24 24"
        fill="none"
        id="logo-svg"
        className="mx-4"
      >
        <g transform="translate(0.17123675,0.19266025)" id="g864">
          <g
            id="g6-9"
            transform="matrix(0.51063831,-0.17782606,0,0.51063831,-25.177763,10.885499)"
            style={{ fill: "#1c274c", fillOpacity: "1" }}
          >
            <g id="g4-4" style={{ fill: "#1c274c", fillOpacity: "1" }}>
              <path
                id="path2-7-6"
                d="m 72.796244,39.778025 c -0.01723,0 -0.03654,-6.89e-4 -0.05377,-6.89e-4 -0.75352,-0.02413 -1.396045,-0.552903 -1.565639,-1.287119 L 67.412679,22.17958 65.207272,27.912673 c -0.246118,0.641147 -0.863135,1.064442 -1.550472,1.064442 h -5.816511 c -0.917599,0 -1.661467,-0.743869 -1.661467,-1.661467 0,-0.917598 0.743868,-1.661466 1.661467,-1.661466 h 4.674166 l 3.745539,-9.73578 c 0.261974,-0.681822 0.931386,-1.111321 1.666981,-1.061684 0.728702,0.05102 1.338136,0.572896 1.502904,1.284362 l 3.575255,15.493692 3.183673,-10.612704 c 0.190275,-0.636321 0.743178,-1.097533 1.402939,-1.173367 0.657004,-0.07377 1.302287,0.248186 1.630444,0.825907 l 2.845175,4.978884 h 4.851344 c 0.917598,0 1.661466,0.743868 1.661466,1.661467 0,0.917598 -0.743868,1.661466 -1.661466,1.661466 h -5.815822 c -0.596336,0 -1.148549,-0.319195 -1.443615,-0.836938 l -1.40156,-2.453593 -3.8717,12.907044 c -0.210958,0.704572 -0.858999,1.185087 -1.589768,1.185087 z"
                style={{
                  fill: "#1c274c",
                  fillOpacity: "1",
                  strokeWidth: "1.689405",
                }}
              />
            </g>
          </g>
          <path
            id="path938-2"
            strokeLinecap="round"
            strokeWidth="2.5"
            stroke="#1c274c"
            d="m 21.828763,11.807339 c 0,4.714 0,7.0711 -1.4645,8.5355 -1.4644,1.4645 -3.8215,1.4645 -8.5355,1.4645 -4.7140495,0 -7.0710695,0 -8.5355295,-1.4645 -1.46447,-1.4644 -1.46447,-3.8215 -1.46447,-8.5355 0,-4.7140495 0,-7.0710685 1.46447,-8.5355285 1.46446,-1.46447 3.82148,-1.46447 8.5355295,-1.46447 4.714,0 7.0711,0 8.5355,1.46447 0.9738,0.97374 1.3001,2.34208 1.4094,4.5355295"
          />
        </g>
      </svg>

      <nav
        className={cn(maxWidth, `flex justify-between flex-row items-center`)}
      >
        <div className=" flex-row gap-8 items-center text-gray-600 dark:text-gray-300">
          <ul className="flex flex-row gap-8 capitalize text-[14.75px] font-medium">
            {navLinks.map((link, index) => {
              return (
                <HeaderNavItem
                  key={index}
                  link={link}
                  isNotFoundPage={isNotFoundPage}
                />
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
