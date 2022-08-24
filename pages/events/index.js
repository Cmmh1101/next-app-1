import React from "react";
import Link from "next/link";

const EventsPage = () => {
  const clients = [
    { id: "react-meetup", name: "React meet up" },
    { id: "css-meetup", name: "css meet up" },
  ];

  return (
    <div>
      <h1>Events page</h1>
      <ul>
        {clients.map((event) => (
          <li key={event.id}>
            {/* regular react link */}
            {/* <Link href={`/events/${event.id}`}>{event.name} </Link> */}
            {/* object link path */}
            <Link
              href={{
                pathname: "/events/[id]",
                query: { id: event.id },
              }}
            >
              {event.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventsPage;
