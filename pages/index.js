import Head from "next/head";
import React from "react";
import EventList from "../components/events/EventList";
import NewsletterRegistration from "../components/input/newsletter-registration";
import { getFeaturedEvents } from "../helpers/api-util";

const HomePage = (props) => {
  return (
    <div>
      <Head>
        <title>Next js events</title>
        <meta name="description" content="find great next js events here" />
      </Head>
      <NewsletterRegistration />
      <EventList items={props.events} />
    </div>
  );
};

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 1800,
  };
}

export default HomePage;
