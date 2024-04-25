import { useEffect, useState } from "react";
import { IconChevronsLeft, IconMenu2, IconX } from "@tabler/icons-react";
import { Layout, LayoutHeader } from "./layout";
import { Button } from "../custom/button";
import Nav from "./nav";
import { cn } from "@/lib/utils";
import { sidelinks } from "@/data/sidelinks";

export default function Sidebar({ className, isCollapsed, setIsCollapsed }) {
  const [navOpened, setNavOpened] = useState(false);

  /* Make body not scrollable when navBar is opened */
  useEffect(() => {
    if (navOpened) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [navOpened]);

  return (
    <aside
      className={cn(
        `fixed left-0 right-0 top-0 z-50 w-full border-r-2 border-r-muted transition-[width] md:bottom-0 md:right-auto md:h-svh ${
          isCollapsed ? "md:w-14" : "md:w-64"
        }`,
        className
      )}
    >
      {/* Overlay in mobile */}
      <div
        onClick={() => setNavOpened(false)}
        className={`absolute inset-0 transition-[opacity] delay-100 duration-700 ${
          navOpened ? "h-svh opacity-50" : "h-0 opacity-0"
        } w-full bg-black md:hidden`}
      />

      <Layout>
        {/* Header */}
        <LayoutHeader className="sticky top-0 justify-between px-4 py-3 shadow-md md:px-4">
          <div className={`flex items-center ${!isCollapsed ? "gap-2" : ""}`}>
            {/* logo fill #1c274c*/}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              id="logo"
              className={`transition-all ${
                isCollapsed ? "h-6 w-6" : "h-8 w-8"
              }`}
            >
              <g transform="translate(0.17123675,0.19266025)" id="g864">
                <g
                  id="g6-9"
                  transform="matrix(0.51063831,-0.17782606,0,0.51063831,-25.177763,10.885499)"
                  fill="#1c274c"
                  className="dark:fill-current"
                >
                  <g id="g4-4">
                    <path
                      id="path2-7-6"
                      d="m 72.796244,39.778025 c -0.01723,0 -0.03654,-6.89e-4 -0.05377,-6.89e-4 -0.75352,-0.02413 -1.396045,-0.552903 -1.565639,-1.287119 L 67.412679,22.17958 65.207272,27.912673 c -0.246118,0.641147 -0.863135,1.064442 -1.550472,1.064442 h -5.816511 c -0.917599,0 -1.661467,-0.743869 -1.661467,-1.661467 0,-0.917598 0.743868,-1.661466 1.661467,-1.661466 h 4.674166 l 3.745539,-9.73578 c 0.261974,-0.681822 0.931386,-1.111321 1.666981,-1.061684 0.728702,0.05102 1.338136,0.572896 1.502904,1.284362 l 3.575255,15.493692 3.183673,-10.612704 c 0.190275,-0.636321 0.743178,-1.097533 1.402939,-1.173367 0.657004,-0.07377 1.302287,0.248186 1.630444,0.825907 l 2.845175,4.978884 h 4.851344 c 0.917598,0 1.661466,0.743868 1.661466,1.661467 0,0.917598 -0.743868,1.661466 -1.661466,1.661466 h -5.815822 c -0.596336,0 -1.148549,-0.319195 -1.443615,-0.836938 l -1.40156,-2.453593 -3.8717,12.907044 c -0.210958,0.704572 -0.858999,1.185087 -1.589768,1.185087 z"
                    />
                  </g>
                </g>
                <path
                  id="path938-2"
                  strokeLinecap="round"
                  strokeWidth="1.5"
                  stroke="#1c274c"
                  className="dark:stroke-current"
                  d="m 21.828763,11.807339 c 0,4.714 0,7.0711 -1.4645,8.5355 -1.4644,1.4645 -3.8215,1.4645 -8.5355,1.4645 -4.7140495,0 -7.0710695,0 -8.5355295,-1.4645 -1.46447,-1.4644 -1.46447,-3.8215 -1.46447,-8.5355 0,-4.7140495 0,-7.0710685 1.46447,-8.5355285 1.46446,-1.46447 3.82148,-1.46447 8.5355295,-1.46447 4.714,0 7.0711,0 8.5355,1.46447 0.9738,0.97374 1.3001,2.34208 1.4094,4.5355295"
                />
              </g>
            </svg>

            <div
              className={`flex flex-col justify-end truncate ${
                isCollapsed ? "invisible w-0" : "visible w-auto"
              }`}
            >
              <span className="font-medium">tViewer</span>
            </div>
          </div>

          {/* Toggle Button in mobile */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-label="Toggle Navigation"
            aria-controls="sidebar-menu"
            aria-expanded={navOpened}
            onClick={() => setNavOpened((prev) => !prev)}
          >
            {navOpened ? <IconX /> : <IconMenu2 />}
          </Button>
        </LayoutHeader>

        {/* Navigation links */}
        <Nav
          id="sidebar-menu"
          className={`h-full flex-1 overflow-auto ${
            navOpened ? "max-h-screen" : "max-h-0 py-0 md:max-h-screen md:py-2"
          }`}
          closeNav={() => setNavOpened(false)}
          isCollapsed={isCollapsed}
          links={sidelinks}
        />

        {/* Scrollbar width toggle button */}
        <Button
          onClick={() => setIsCollapsed((prev) => !prev)}
          size="icon"
          variant="outline"
          className="absolute -right-5 top-1/2 hidden rounded-full md:inline-flex"
        >
          <IconChevronsLeft
            stroke={1.5}
            className={`h-5 w-5 ${isCollapsed ? "rotate-180" : ""}`}
          />
        </Button>
      </Layout>
    </aside>
  );
}
