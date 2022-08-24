import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <ul>
        <li>
          <Link href="/portfolio">Portfolio</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link href="/clients">Clients</Link>
        </li>
      </ul>
    </div>
  );
};

export default HomePage;
