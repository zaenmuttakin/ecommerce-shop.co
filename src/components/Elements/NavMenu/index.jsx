import { useRef, useState } from "react";
import { nav } from "../../../constants/pagesData";

const NavMenu = ({ styles="" }) => {
  const MenuRef = useRef(null);
  const subMenuRef = useRef(null);
  const [displayMenu, setDisplayMenu] = useState(false);
  const [displaySubMenu, setDisplaySubMenu] = useState(false);
  const handleMenu = () => {
      setDisplayMenu(!displayMenu);
  }
  const handleSubMenu = () => {
    setDisplaySubMenu(!displaySubMenu);
  };

  return (
    <div className={styles}>
      {/* menu mobile */}
      <div className="block xl:hidden">
        <button className="cursor-pointer" onClick={() => handleMenu()}>
          <i className="ic-menu tx-3 leading-normal" />
        </button>
        <ul
          className={`absolute flex flex-col gap-6 tx-2 bg-white min-w-full rounded-b top-16 px-6 py-10 left-0 border-t border-gray-10 ${displayMenu ? "block" : "hidden"}`}
          ref={MenuRef}
        >
          {nav.map((menu, i) => {
            return (
              <li key={i} className="tx-2 capitalize">
                {menu.subMenus && (
                  <div className="cursor-pointer">
                    <div
                      className="flex gap-2 "
                      onClick={() => handleSubMenu()}
                    >
                      <a href="#" className="link">
                        {menu.name}
                      </a>
                      <i
                        className={`ic-chevron tx-3  ${
                          displaySubMenu ? "rotate-180" : "rotate-0"
                        } transition-all ease-in`}
                      />
                    </div>

                    {/* submenu */}
                    <ul
                      className={`flex flex-col gap-3 px-5 py-4 mt-5 bg-gray-10 rounded-md ${
                        displaySubMenu ? "block" : "hidden"
                      }`}
                      ref={subMenuRef}
                    >
                      {menu.subMenus.map((submenu, i) => (
                        <li key={i}>
                          <a href="#" className="link">
                            {submenu}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {!menu.subMenus && (
                  <a href="#" className="link">
                    {menu.name}
                  </a>
                )}
              </li>
            );
          })}
        </ul>
      </div>

      {/* menu dektop */}
      <ul className="gap-6 tx-2 hidden xl:flex">
        {nav.map((menu, i) => {
          return (
            <li key={i} className="relative tx-2 capitalize">
              {menu.subMenus && (
                <div
                  className="flex gap-2 cursor-pointer"
                  onClick={() => handleSubMenu()}
                >
                  <a href="#" className="link">
                    {menu.name}
                  </a>
                  <i
                    className={`ic-chevron tx-3  ${
                      displaySubMenu ? "rotate-180" : "rotate-0"
                    } transition-all ease-in`}
                  />

                  {/* submenu */}
                  <ul
                    className={`absolute flex flex-col gap-3 p-8 top-10 left-[50%] -translate-x-[50%] bg-white rounded-md ${
                      displaySubMenu ? "block" : "hidden"
                    }`}
                    ref={subMenuRef}
                  >
                    {menu.subMenus.map((submenu, i) => (
                      <li key={i}>
                        <a href="#" className="link">
                          {submenu}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {!menu.subMenus && (
                <a href="#" className="link">
                  {menu.name}
                </a>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NavMenu;
