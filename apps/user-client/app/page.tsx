import Image from "next/image";
import { Button } from "@repo/ui/button";
import styles from "./page.module.css";
import { PrismaClient } from "@repo/db/client";

const client =  new PrismaClient();

export default function Home() {
  return (

    <div>

<h1 className="text-orange-500">
      Hello world!
    </h1>
  <Button className="bg-orange-500 rounded-full" appName="user-client">

    Click me 
  </Button>

    </div>
    
  );
}
