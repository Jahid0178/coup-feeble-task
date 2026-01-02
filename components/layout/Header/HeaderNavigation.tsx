import { navigations } from "@/data";
import Link from "next/link";
import React from "react";

const HeaderNavigation = () => {
  return (
    <nav className="hidden md:block">
      <ul className="flex items-center gap-4">
        {navigations.map((navigation) => (
          <li key={navigation.title}>
            <Link
              href={navigation.href}
              className="px-2 py-3 text-base font-medium text-secondary"
            >
              {navigation.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default HeaderNavigation;
