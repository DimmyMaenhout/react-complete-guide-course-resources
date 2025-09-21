"use client";

import Link from "next/link";
import classes from "./nav-link.module.css"; // we can choose whatever name we want for this, it doesn't have to be classes
import { usePathname } from "next/navigation";

export default function NavLink({ href, children }) {
  const path = usePathname();

  return (
    <Link
      href={href}
      className={
        path.startsWith(href)
          ? `${classes.link} ${classes.active}`
          : classes.link // we use startsWith because there might be nested pages
      }
    >
      {children}
    </Link>
  );
}
