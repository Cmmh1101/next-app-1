import React from "react";
import EventList from "../components/events/EventList";
import { getFeaturedEvents } from "../helpers/api-util";

const HomePage = (props) => {
  console.log(props.events);
  return (
    <div>
      <ul>
        <EventList items={props.events} />
      </ul>
    </div>
  );
};

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      events: featuredEvents,
    },
  };
}

export default HomePage;
