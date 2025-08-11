import Link from "next/link";
import Image from "next/image";

import logoImg from "@/assets/logo.png"; // this "@" symbol is an alias and point to the root of the project
import classes from "./main-header.module.css"; // we can choose whatever name we want for this, it doesn't have to be classes
import MainHeaderBackground from "./main-header-background";

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />

      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image src={logoImg} alt="A plate with food in it" priority />
          NextLevel Food
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
              <Link href="/meals">Browse Meals</Link>
            </li>
            <li>
              <Link href="/community">Foodies Community</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
