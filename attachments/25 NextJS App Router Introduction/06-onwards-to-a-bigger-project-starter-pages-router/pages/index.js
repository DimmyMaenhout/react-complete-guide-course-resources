import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

import { MongoClient } from "mongodb";

import Head from "next/head";

// const DUMMY_MEETUPS = [
//   {
//     id: "m1",
//     title: "A First Meetup",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
//     address: "Some address 5, 12345, Some City",
//     description: "This is a first meetup",
//   },
//   {
//     id: "m2",
//     title: "A Second Meetup",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
//     address: "Some address 5, 12345, Some City",
//     description: "This is a second meetup",
//   },
//   {
//     id: "m3",
//     title: "A Third Meetup",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
//     address: "Some address 5, 12345, Some City",
//     description: "This is a third meetup",
//   },
// ];

function HomePage(props) {
  //   const [loadedMeetups, setLoadedMeetups] = useState([]);

  //   useEffect(() => {
  //     // send a http request to fetch data
  //     setLoadedMeetups(DUMMY_MEETUPS);
  //   }, []);

  return (
    <>
      <Head>
        <title>React Meetups</title>
        <meta
          name="description"
          content="Browse a huge list of highly active React meetups!"
        />
      </Head>
      <MeetupList meetups={props.meetups} /> {/* // loadedMeetups */}
    </>
  );
}

export async function getStaticProps() {
  // used to render static pages (pre-rendering), it is used to fetch data at build time before a page is rendered, this is better for SEO, performance, pages that don't change (often)

  // fetch data from API
  const client = await MongoClient.connect(
    "mongodb+srv://dimmymaenhout:<db_password>@cluster0.2szefvn.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0"
  ); // meetups is the name of our database, if it doensn't exist yet it will be created on the fly
  const db = client.db();
  const meetupsCollection = db.collection("meetups"); // the collection can have any name of our choice, if it doesn't exist yet it will be created on the fly like the db

  const meetups = await meetupsCollection.find().toArray(); // this will be default find all the documents in that collection

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 10, // number of seconds NextJS wil wailt until it regenerates this page for an incomning request
  };
}

// the difference with getStaticProps() is that this function will not run during the build process but instead always on the server after deployment
// this function will run for every incoming request so there is no need to revalidate every x seconds
// this method should only be used if we need access to that concrete request object or if we really have data that changes multiple times every second

// export async function getServerSideProps(context) {
//   const req = context.req; // request
//   const res = context.res; // response

//   // fetch data from an API or the file system
//   // Any code we write in here will always run on the server, never in the client so we can run the serverside code in here
//   // we can also perform operations that use credentials that should not be exposed to our users (because this code only runs on the server)
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

export default HomePage;
