import ClientDemo from "@/components/ClientDemo";
import DataFetchingDemo from "@/components/DataFetchingDemo";
import RSCDemo from "@/components/RSCDemo";
import ServerActionsDemo from "@/components/ServerActionsDemo";
import UsePromiseDemo from "@/components/UsePromisesDemo";

import fs from "node:fs/promises";

export default async function Home() {
  const data = await fs.readFile("dummy-db.json", "utf-8");
  const users = JSON.parse(data);

  return (
    <main>
      {/* 
      <ClientDemo>
        <RSCDemo />
      </ClientDemo> 
      */}

      {/* <DataFetchingDemo /> */}

      {/* <ServerActionsDemo /> */}

      <UsePromiseDemo users={users} />
    </main>
  );
}
