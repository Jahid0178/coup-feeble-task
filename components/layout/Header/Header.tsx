import React from "react";
import { Button } from "@/components/ui/button";
import Logo from "@/components/common/Logo/Logo";
import HeaderNavigation from "./HeaderNavigation";

const Header = () => {
  return (
    <header className="bg-white max-w-[1200px] h-[81px] mx-auto pl-6 pr-5 py-5 rounded-[200px] fixed top-10 left-0 right-0 z-20 shadow-xs">
      <div className="flex items-center justify-between">
        <Logo />
        <HeaderNavigation />
        <Button
          className="max-w-[138px] w-full h-[41px] px-[18px] py-[11px] text-base font-medium rounded-[43.62px]"
          role="button"
        >
          Contact Sales
        </Button>
      </div>
    </header>
  );
};

export default Header;
