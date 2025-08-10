import Link from "next/link";
import Header from "../components/header";

export default function Home() {
  return (
    <main>
      <Header />

      <p>🔥 Let&apos;s get started! 🔥</p>
      <p>
        <Link href="/about">About us</Link>{" "}
        {/* The Link component makes sure we stay on a single page application (SPA) we are not leaving the paging and are not loading a brand new page which is the case when we use the <a></a> element, moet worden gebruikt voor links tussen interne navigatie binnen de app terwijl <a> wordt gebruikt voor externe links zoals naar Google, social media, downloadlinks*/}
      </p>
    </main>
  );
}
