import React from "react";
import { useRouter } from "next/router";

const EventPage = () => {
  const router = useRouter();
  console.log(router.query);

  return (
    <div>
      <h1>The project of a given event</h1>
    </div>
  );
};

export default EventPage;
