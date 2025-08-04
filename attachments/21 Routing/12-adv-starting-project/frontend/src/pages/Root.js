import { Outlet, useNavigation } from "react-router-dom";

import MainNavigation from "../components/MainNavigation";

function RootLayout() {
  //   const navigation = useNavigation(); // The loading indicator won't be added on the page which we're transitioning to but instead on some page or a component which is already visible on the screen

  return (
    <>
      <MainNavigation />
      <main>
        {/* {navigation.state === "loading" && <p>Loading</p>} */}
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
