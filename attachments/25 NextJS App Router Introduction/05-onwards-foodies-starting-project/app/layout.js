import MainHeader from "@/components/main-header/main-header";
import "./globals.css";

export const metadata = {
  // the meta data here will automatically be added to all the pages that are wrapped by that layout unless a page specifies its own metadata
  title: "NextLevel Food",
  description: "Delicious meals, shared by a food-loving community.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainHeader />

        {children}
      </body>
    </html>
  );
}
