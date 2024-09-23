"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

import Icon from "../shared/Icon";

export default function NavBar() {
  const pathname = usePathname();

  useEffect(() => {
    console.log("🚀 ~ NavBar ~ router:", pathname);
  }, []);

  const navItems = [
    { href: `/inicio`, label: "Inicio", icon: "map-pin" },
    { href: "/agregar", label: "Agregar", icon: "store-front" },
    { href: `/historial`, label: "Historial", icon: "post-history" },
  ];

  return (
    <div className="dl-fixed dl-bottom-6 dl-left-0 dl-right-0 dl-px-6">
      <nav
        className="dl-bg-neutral-lightest dl-shadow-nav-bar dl-text-white dl-p-2.5 dl-z-50 dl-rounded-lg dl-mx-auto 
        dl-max-w-sm md:dl-max-w-md lg:dl-max-w-lg"
      >
        <ul className="dl-flex dl-justify-between">
          {navItems.map((item) => (
            <li
              key={item.href}
              className={`cursor-pointer ${
                item.href === pathname
                  ? "dl-bg-highlight-lightest dl-text-highlight-dark"
                  : "dl-bg-transparent dl-text-neutral-dark"
              }`}
            >
              <a
                href={item.href}
                className="dl-p-2 dl-font-semibold dl-flex dl-flex-col dl-w-22 dl-h-18 dl-items-center dl-justify-center dl-gap-1"
              >
                <Icon
                  name={item.icon}
                  color={pathname === item.href ? "#003D9F" : "#6C6C6C"}
                />
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
