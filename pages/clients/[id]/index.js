import React from "react";
import { useRouter } from "next/router";

const ClientProjectPage = () => {
  // navigate away when btn is clicked
  const router = useRouter();
  console.log(router.query);
  const loadProjectHandler = () => {
    // load data...
    router.push("/clients/carla/project1");
  };
  return (
    <div>
      <h1>The project of a given client</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
};

export default ClientProjectPage;
