import { Outlet } from "react-router-dom";
import MainHeader from "../components/MainHeader";

export default function RootLayout() {
  return (
    <>
      <MainHeader />
      <Outlet />{/* this is a placeholder for our content (pages) */}
    </>
  );
}
