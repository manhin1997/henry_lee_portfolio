import React from "react";
import redlogo from "@/resources/images/Icon_red_512.png";
import bluelogo from "@/resources/images/Icon_blue_512.png";
import clsx from "clsx";
import "./topbar.css";

interface TopbarProps {
  menuOpen: boolean;
  setmenuOpen: (open: boolean) => void;
  hoverOnTop: boolean;
  sethoverOnTop: (hover: boolean) => void;
}

const Topbar: React.FC<TopbarProps> = ({
  menuOpen,
  setmenuOpen,
  hoverOnTop,
  sethoverOnTop,
}) => {
  return (
    <div
      className={clsx(
        "fixed topbar w-full h-[var(--navbar-height)] top-0 left-0 z-30 text-white flex items-center justify-between px-5 transition-all duration-500",
        !hoverOnTop && "bg-gray-800",
        hoverOnTop && "bg-white"
      )}
      id="topbar"
      onMouseEnter={() => sethoverOnTop(true)}
      onMouseLeave={() => sethoverOnTop(false)}
    >
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center">
          <a href="#intro" className="mr-5 cursor-pointer">
            <div className="relative w-12 h-12">
              <img
                src={redlogo}
                alt="Portfolio Icon"
                className={clsx(
                  "absolute w-full h-full object-cover transition-opacity duration-500",
                  !hoverOnTop && "opacity-0"
                )}
              />
              <img
                src={bluelogo}
                alt="Portfolio Icon"
                className={clsx(
                  "absolute w-full h-full object-cover transition-opacity duration-500",
                  hoverOnTop && "opacity-0"
                )}
              />
            </div>
          </a>
          <div
            className={clsx(
              "mr-5 cursor-pointer transition-colors duration-500 text-3xl font-bold",
              hoverOnTop && "text-gray-800",
              !hoverOnTop && "text-white"
            )}
          >
            Henry LEE
          </div>
        </div>
        <div className="flex items-center">
          <div className="flex items-center">
            <div
              className={clsx(
                "hamburger w-8 h-5 flex flex-col justify-between cursor-pointer",
                menuOpen && "open"
              )}
              onClick={() => setmenuOpen(!menuOpen)}
            >
              <span
                className={clsx(
                  "line",
                  hoverOnTop && "bg-gray-800",
                  !hoverOnTop && "bg-white"
                )}
              ></span>
              <span
                className={clsx(
                  "line",
                  hoverOnTop && "bg-gray-800",
                  !hoverOnTop && "bg-white"
                )}
              ></span>
              <span
                className={clsx(
                  "line",
                  hoverOnTop && "bg-gray-800",
                  !hoverOnTop && "bg-white"
                )}
              ></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
