import { useLoaderData, Await } from "react-router-dom";

import EventsList from "../components/EventsList";
import { Suspense } from "react";

function EventsPage() {
  const { events } = useLoaderData(); // we will always get the final data, we don't need to await it (normally it's a Promise but useLoaderData takes care of it so we get the actual data). userLoaderData can also be used in the EventsList component, it just can't be used on a higher lever than we're fetching the data.

  // if (data.isError) {
  //   return <p>{data.message}</p>;
  // }

  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
      <Await resolve={events}>
        {(loadedEvents) => <EventsList events={loadedEvents} />}
      </Await>
    </Suspense>
  );
}

export default EventsPage;

async function loadEvents() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // return { isError: true, message: "could not fetch events." };

    // throw new Response(JSON.stringify({ message: "could not fetch events." }), {
    //   status: 500,
    // });

    // The json and defer methods are deprecated in favor of returning raw object from react-router 7. If we were using json to serialize our data to JSON we can now use the native Response.json() method instead

    // return { message: "Could not fetch events.", status: 500 };

    // throw Response.json({ message: "could not fetch events.", status: 500 }); // json is a function that creates a response object that includes data in the json format. We simply pass our data to this function that should be included in the response and we don't need to convert this json manually and we can pass a second argument where we can set that extra response metadata like this status
    // FROM ROUTER V7 the method json is no longer supported and we should construct a Response manually!!!
    throw Response(JSON.stringify({ message: "Could not fetch events." }), {
      status: 500,
    });
  } else {
    const resData = await response.json();

    return resData.events; // React router will automatically take any value we return in this function, for example the response data and will make that data available in the page that is being rendered as well as any other components where we need it. This loader code is not happening on a server but is still happening in the browser eventhough it's not in a component. This is still client-side code!
    // We can return any type of data in this loader, we can return an array (like in this case) or for example create a new respones object

    // const res = new Response("any data", {
    //   status: 201,
    // });
    // this is a modern browser feature, we can build our own responses because the browser supports this response constructor and response object. The response constructor takes any data of our choice as a first argument and then we can configure it with greater detail with an extra object that can be set as a second argument.
    // We can also just return the response (from the fetch)
  }
}

export function loader() {
  // from Router v7 we can directly return an object that contains unresolved promises instead of  using "defer()"
  return { events: loadEvents() };
}
