import './globals.css'

export const metadata = { // metadata is a reserverd word in Next.js. If we export a variable or constant with that name, it should contain an object where we can than set the title and the description of the page and some other meta data fields that will be applied to all pages that are covered by that layout.
  title: 'NextJS Course App',
  description: 'Your first NextJS app!',
};

export default function RootLayout({ children }) { // children is the content of the page that is currenlty active because the layout is a wrapper around 1 or more pages, page is the actual content
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
