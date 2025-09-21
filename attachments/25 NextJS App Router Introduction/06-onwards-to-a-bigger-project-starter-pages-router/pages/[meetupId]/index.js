import MeetupDetail from "../../components/meetups/MeetupDetail";

import { MongoClient, ObjectId } from "mongodb";
import Head from "next/head";

function MeetupDetailsPage(props) {
  return (
    <>
      <Head>
        <title>{props.meetupData.title}</title>
        <meta name="description" content={props.meetupData.description} />
      </Head>
      <MeetupDetail
        image={props.meetupData.image}
        title={props.meetupData.title}
        address={props.meetupData.address}
        description={props.meetupData.description}
      />
    </>
  );
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://dimmymaenhout:<db_password>@cluster0.2szefvn.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0"
  ); // meetups is the name of our database, if it doensn't exist yet it will be created on the fly
  const db = client.db();
  const meetupsCollection = db.collection("meetups"); // the collection can have any name of our choice, if it doesn't exist yet it will be created on the fly like the db

  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray(); // _id: 1 = only include the id but no other field values

  client.close();

  return {
    // false = paths contains all supported meetup ID values, if the users enters and ID that is not in here he/she would see a 404 error
    // true = NextJS will try to generate a page for this meetupId dynamically on the server
    // fallback allows us to pre-generate some of our pages for specific meetupId values, for example the pages which are visited most frequently and then pre-generate the missing ones dynamically when requests for them are coming in.
    // when fallback is set to true or "blocking" NextJS will not respond with a 404 page if it can't find the page immediately instea it will generate the page on demand and cache it afterwards, with true it would immediately return an empty page
    fallback: "blocking",
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  // fetch data for a single meetup

  const meetupId = context.params.meetupId;

  const client = await MongoClient.connect(
    "mongodb+srv://dimmymaenhout:<db_password>@cluster0.2szefvn.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0"
  ); // meetups is the name of our database, if it doensn't exist yet it will be created on the fly
  const db = client.db();
  const meetupsCollection = db.collection("meetups"); // the collection can have any name of our choice, if it doesn't exist yet it will be created on the fly like the db

  const selectedMeetup = await meetupsCollection.findOne({
    _id: ObjectId(meetupId),
  });

  client.close();

  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        image: selectedMeetup.image,
        description: selectedMeetup.description,
      },
    },
  };
}

export default MeetupDetailsPage;
