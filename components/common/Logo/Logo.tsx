import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Args {
  redirect?: string;
}

const Logo = ({ redirect = "/" }: Args) => {
  return (
    <Link href={redirect}>
      <Image
        src="/logo/logo.svg"
        alt="Logo"
        width={106}
        height={34}
        priority
      />
    </Link>
  );
};

export default Logo;
