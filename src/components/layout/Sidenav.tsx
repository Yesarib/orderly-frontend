import React, { useState } from "react";
import { Button, Typography } from "@material-tailwind/react";
import { Link, NavLink, useLocation } from "react-router-dom";
import routes from "../../routes";

interface OpenMenuState {
  [key: string]: boolean;
}

export function Sidenav() {
  const fullPath = useLocation();
  const path = fullPath.pathname?.split("/dashboard/");
  const currentPath = path[1];
  const [openMenu, setOpenMenu] = useState<OpenMenuState>({});

  const toggleMenu = (menuName: any) => {
    setOpenMenu((prev) => ({
      ...prev,
      [menuName]: !prev[menuName],
    }));
  };

  return (
    <aside className="fixed inset-0 z-50 my-4 ml-4 h-[calc(100vh-32px)] w-72 rounded-xl transition-transform duration-300 xl:translate-x-0 border border-blue-gray-200">
      <div className="relative">
        <Link to={"/"} className="flex justify-center items-center gap-2 lg:mt-8 ">
          <img
            src="https://pbs.twimg.com/profile_images/1610066785025523713/2iij3ydV_400x400.jpg"
            alt="logo"
            className="w-8 rounded-full"
          />
          <Typography variant="h5" className="text-center font-sans lg:mt-1">
            Orderly
          </Typography>
        </Link>
      </div>
      <hr />
      <div className="m-4">
        {routes.map(({ layout, pages }, key) => (
          <ul key={key} className="mb-4 flex flex-col gap-1">
            {pages.map((page: any) => (
              <li key={page.name}>
                {page.subPaths ? (
                  <div>
                    <Button
                      variant={
                        page.path && currentPath === page.path.split("/")[1]
                          ? "gradient"
                          : "text"
                      }
                      color={
                        page.path && currentPath === page.path.split("/")[1]
                          ? "black"
                          : "blue-gray"
                      }
                      className="flex items-center gap-4 px-4 capitalize"
                      fullWidth
                      onClick={() => toggleMenu(page.name)}
                    >
                      <div className="text-2xl">{page.icon}</div>
                      <Typography className="mt-1 font-roboto font-bold">
                        {page.name}
                      </Typography>
                    </Button>
                    {openMenu[page.name] && (
                      <ul className="pl-8 mt-2 space-y-2">
                        {page.subPaths.map((subPath: any) => (
                          <li key={subPath.name}>
                            <NavLink to={`/${layout}${subPath.path}`}>
                              {({ isActive }) => (
                                <Button
                                  variant={isActive ? "gradient" : "text"}
                                  color={isActive ? "black" : "blue-gray"}
                                  className="flex items-center gap-4 capitalize"
                                  fullWidth
                                >
                                  <div className="text-2xl">{subPath.icon}</div>

                                  <Typography className="mt-1 font-roboto">
                                    {subPath.name}
                                  </Typography>
                                </Button>
                              )}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <NavLink to={`/${layout}${page.path}`}>
                    {({ isActive }) => (
                      <Button
                        variant={
                          page.path && currentPath === page.path.split("/")[1]
                            ? "gradient"
                            : "text"
                        }
                        color={
                          page.path && currentPath === page.path.split("/")[1]
                            ? "black"
                            : "blue-gray"
                        }
                        className="flex items-center gap-4 px-4 capitalize"
                        fullWidth
                      >
                        <div className="text-2xl">{page.icon}</div>
                        <Typography className="mt-1 font-roboto font-bold">
                          {page.name}
                        </Typography>
                      </Button>
                    )}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </aside>
  );
}

export default Sidenav;
