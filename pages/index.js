import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <ul>
        <li>
          <Link href="/events">Events</Link>
        </li>
      </ul>
    </div>
  );
};

export default HomePage;
