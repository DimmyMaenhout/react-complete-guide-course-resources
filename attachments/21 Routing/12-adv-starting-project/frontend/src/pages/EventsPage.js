import { Link } from "react-router-dom";

const EVENTS = [
  { id: "1", title: "first event" },
  { id: "2", title: "second event" },
  { id: "3", title: "third event" },
  { id: "4", title: "fourth event" },
];

function EventsPage() {
  return (
    <>
      <h1>Events Page</h1>
      <ul>
        {EVENTS.map((event) => {
          return (
            <li>
              <Link to={event.id}>{event.title}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default EventsPage;
