import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import BlogPage, { loader as postsLoader } from './pages/Blog';
import HomePage from "./pages/Home";
// import PostPage, { loader as postLoader } from "./pages/Post";
import RootLayout from "./pages/Root";
import { lazy, Suspense } from "react";

const BlogPage = lazy(() => import("./pages/Blog"));
const PostPage = lazy(() => import("./pages/Post"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "posts",
        children: [
          {
            index: true,
            element: (
              <Suspense fallback={<p>Loading...</p>}>
                {/* because we are lazy loading the BlogPage component we have to use the Suspense component, it is used to wait for content to be loaded  before actually rendering the content */}
                <BlogPage />
              </Suspense>
            ),
            loader: /*postsLoader*/ () =>
              import("./pages/Blog").then((module) => module.loader()),
          }, // Here we are lazy loading the loader function, we could've also used async await instead of .then(). This import function here will only be executed once the loader here for the blog page is executed. So only once we try to visit the blog page, only then the blog file will be imported and this loader function from that file will be executed. With that, we're loading that loader function lazily
          {
            path: ":id",
            element: (
              <Suspense fallback={<p>Loading...</p>}>
                <PostPage />
              </Suspense>
            ),
            loader: /* postLoader */ (meta) =>
              import("./pages/Post").then((module) => module.loader(meta)),
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
