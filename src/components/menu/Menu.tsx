import clsx from "clsx";
import React from "react";

interface MenuProps {
  menuOpen: boolean;
  setmenuOpen: (open: boolean) => void;
  hoverOnTop: boolean;
}

const MenuConst = [
  { name: "Home", href: "#intro" },
  { name: "Experience", href: "#experience" },
  { name: "Works", href: "#works" },
];

const Menu: React.FC<MenuProps> = ({ menuOpen, setmenuOpen, hoverOnTop }) => {
  return (
    <div
      className={clsx(
        `w-full h-auto right-auto
        menu fixed z-20 text-white flex flex-col top-[var(--navbar-height)] 
        transform transition-all duration-500 
        md:right-0 md:w-72 md:h-screen `,
        menuOpen && "md:translate-x-0 md:translate-y-0 translate-y-0",
        !menuOpen && "md:translate-x-full md:translate-y-0 -translate-y-96",
        !hoverOnTop && "bg-gray-800",
        hoverOnTop && "bg-white"
      )}
    >
      {MenuConst.map((item, index) => (
        <ul className="list-none p-0 m-0 w-full text-center" key={index}>
          <a href={item.href} onClick={() => setmenuOpen(false)}>
            <li
              className={clsx(
                "w-full py-5 cursor-pointer transition-colors duration-500 hover:bg-gray-700",
                hoverOnTop && "text-gray-800",
                !hoverOnTop && "text-white"
              )}
            >
              {item.name}
            </li>
          </a>
        </ul>
      ))}
    </div>
  );
};

export default Menu;
