import React from "react";
import Link from "next/link";

const ClientsPage = () => {
  const clients = [
    { id: "carla", name: "carla" },
    { id: "rodolfo", name: "rodolfo" },
  ];

  return (
    <div>
      <h1>clients page</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            {/* regular react link */}
            {/* <Link href={`/clients/${client.id}`}>{client.name} </Link> */}
            {/* object link path */}
            <Link
              href={{
                pathname: "/clients/[id]",
                query: { id: client.id },
              }}
            >
              {client.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientsPage;
