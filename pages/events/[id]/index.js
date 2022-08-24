import React from "react";
import { useRouter } from "next/router";

const EventPage = () => {
  // navigate away when btn is clicked
  const router = useRouter();
  console.log(router.query);
  const loadEventHandler = () => {
    // load data...
    router.push("/events/carla/project1");
  };
  return (
    <div>
      <h1>The project of a given event</h1>
      <button onClick={loadEventHandler}>Load event A</button>
    </div>
  );
};

export default EventPage;
