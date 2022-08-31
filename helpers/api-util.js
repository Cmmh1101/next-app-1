export async function getAllEvents() {
  const response = await fetch(
    "https://nextjs-events-87e97-default-rtdb.firebaseio.com/events.json"
  );

  const data = await response.json();
  const events = [];
  for (const key in data) {
    console.log("events");
    events.push({
      id: key,
      ...data[key],
    });
  }
  return events;
}

export async function getFeaturedEvents() {
  const allEvents = await getAllEvents();

  return allEvents.filter((event) => event.isFeatured);
}

export async function getEventById(id) {
  const allEvents = await getAllEvents();
  return allEvents.find((event) => event.id === id);
}
