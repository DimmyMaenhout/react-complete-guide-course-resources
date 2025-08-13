import { MongoClient } from "mongodb";

// We will define functions which contains server-side code in the files that are in the api folder because API routes will only run on the server never on the client, the code in these files will never be exposed to the client
// These functions are simply triggered whenever a request is sent to this route so to /api/new-meetup for example
// the file names will act as path segments in the URL

export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    // this is code we never want to run on the client side because it would expose our credentials to visitors which isn't a problem in this API route,
    // to connect to the db insert the password <db_password> 
    const client = await MongoClient.connect(
      "mongodb+srv://dimmymaenhout:<db_password>@cluster0.2szefvn.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0"
    ); // meetups is the name of our database, if it doensn't exist yet it will be created on the fly
    const db = client.db();
    const meetupsCollection = db.collection("meetups"); // the collection can have any name of our choice, if it doesn't exist yet it will be created on the fly like the db

    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: "Meetup inserted!" });
  }
}
