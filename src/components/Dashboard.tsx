import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import dotenv from "dotenv";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import AddTask from "./AddTask";

dotenv.config();

const firebaseConfig = {
  apiKey: process.env.APIKEY,
  authDomain: process.env.AUTHDOMAIN,
  databaseURL: process.env.DATABASEURL,
  projectId: process.env.PROJECTID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);

export default function Dashboard() {
  const db = getFirestore(app);

  return (
    <section className="p-4 font-inter w-full">
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Nexa Team" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Nexa Team</SelectItem>
          <SelectItem value="dark">Another Team</SelectItem>
          <SelectItem value="dark">Another Team</SelectItem>
        </SelectContent>
      </Select>
      <div className="flex justify-between items-center mt-10">
        <h1 className="font-bold text-2xl">Hello, member of Nexa Team!</h1>
        <AddTask />
      </div>
      <p className="mt-4 mb-4 text-sm">Tasks of the project:</p>
      <div className="grid grid-cols-4 gap-4 auto-rows-auto">
        <Card>
          <CardHeader>
            <CardTitle>Task Title</CardTitle>
            <CardDescription>Priority: High</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Task Content</p>
          </CardContent>
          <CardFooter>
            <Button size={"sm"}>Complete Task</Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
