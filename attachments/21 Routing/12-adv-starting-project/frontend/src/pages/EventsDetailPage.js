import { redirect, useRouteLoaderData, Await } from "react-router-dom";
import EventItem from "../components/EventItem";
import EventsList from "../components/EventsList";
import { Suspense } from "react";

function EventsDetailPage() {
  const { event, events } = useRouteLoaderData("event-detail");
  return (
    <>
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
        <Await resolve={event}>
          {(loadedEvent) => <EventItem event={loadedEvent} />}
        </Await>
      </Suspense>

      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
        <Await resolve={events}>
          {(loadedEvents) => <EventsList events={loadedEvents} />}
        </Await>
      </Suspense>
    </>
  );
}

export default EventsDetailPage;

async function loadEvent(id) {
  const response = await fetch("http://localhost:8080/events/" + id);

  if (!response.ok) {
    throw Response.json({
      message: "could not fetch details for selected event.",
      status: 500,
    });
  } else {
    const resData = await response.json();
    return resData.event;
    // return response;
  }
}

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

export async function loader({ request, params }) {
  const id = params.id;

  return {
    event: await loadEvent(
      id
    ) /* if we have an async loader with the async function we can simply add the await keyword here and that will make sure that it waits for this data to be loaded before loading this page component at all, so before moving and navigating to this page component but will load the loadEvents data after the page was loaded */,
    events: loadEvents(),
  };
}

export async function action({ params, request }) {
  const eventId = params.id;
  const response = await fetch("http://localhost:8080/events/" + eventId, {
    method: request.method,
  });

  if (!response.ok) {
    throw Response.json({
      message: "could not delete event.",
      status: 500,
    });
  }

  return redirect("/events");
}
