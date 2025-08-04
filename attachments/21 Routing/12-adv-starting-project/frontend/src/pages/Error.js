import { useRouteError } from "react-router-dom";
import PageContent from "../components/PageContent";
import MainNavigation from "../components/MainNavigation";

function ErrorPage() {
  const error = useRouteError(); // if we throw an error we can use error.status to get the code of the error, if we just throw an object the "error" property will be the object and won't have a status property, so throwing an error can help with building a generic error handling component.

  let title = "An error occurred!";
  let message = "Something went wrong!";

  if (error.status === 500) {
    message = JSON.parse(error.data).message;
    // message = JSON.parse(error.data).message; // error.data gives us access to the data that is included in this error response that was thrown, in this case that object has a message (see the file events.js in the pages folder). The data has to be parsed otherwise we'll just have JSON instead of an object
  }

  if (error.status === 404) {
    title = "Not found!";
    message = "Could not find resource or page.";
  }

  return (
    <>
      <MainNavigation />
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </>
  );
}

export default ErrorPage;
