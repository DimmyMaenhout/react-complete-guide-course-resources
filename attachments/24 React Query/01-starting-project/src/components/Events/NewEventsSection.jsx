import { useQuery } from "@tanstack/react-query";

import LoadingIndicator from "../UI/LoadingIndicator.jsx";
import ErrorBlock from "../UI/ErrorBlock.jsx";
import EventItem from "./EventItem.jsx";
import { fetchEvents } from "../../util/http.js";

export default function NewEventsSection() {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["events", { max: 3 }], // every query should also have a key, this is used to cache data that's yielded by that request, so the response from that request can be re-used in the future. We choose the keys and they are not limited to Strings! We culd also have objects in there or nested Arrays etc.
    queryFn: ({ signal, queryKey }) =>
      fetchEvents({ signal: signal, ...queryKey[1] }),
    staleTime: 5000, // controls after which time React Query (tanstack query) will send such behind the scenes request to get updated data if it found data in our cache. The Default is 0 (it is set in miliseconds) so it will then alwyas also send such a behind the scenes request to get updated data
    // gcTime: 30000 // garbage collection time (default is 5 minutes), this controls how long the data and the cache will be kept around, value here is 30.000 miliseconds so 30 seconds
  });

  let content;

  if (isPending) {
    content = <LoadingIndicator />;
  }

  if (isError) {
    content = (
      <ErrorBlock
        title="An error occurred"
        message={error.info?.message || "Failed to fetch events."}
      />
    );
  }

  if (data) {
    content = (
      <ul className="events-list">
        {data.map((event) => (
          <li key={event.id}>
            <EventItem event={event} />
          </li>
        ))}
      </ul>
    );
  }

  return (
    <section className="content-section" id="new-events-section">
      <header>
        <h2>Recently added events</h2>
      </header>
      {content}
    </section>
  );
}
