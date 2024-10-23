import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, SelectGroup } from "@/components/ui/select";
import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import Task from "./Task";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  databaseURL: import.meta.env.VITE_DATABASEURL,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);

export interface TaskData {
  completed: boolean;
  id: string;
  description: string;
  title: string;
  priority: string;
}

export default function Dashboard() {
  const [tasks, setTasks] = useState<TaskData[]>();
  const [addTask, setAddTask] = useState<TaskData>();

  const db = getFirestore(app);

  useEffect(() => {
    const getTasks = async () => {
      const data = await getDocs(collection(db, "tasks"));
      const tasks = data.docs.map((task) => ({
        ...task.data(),
        id: task.id,
        completed: task.data().completed, // add this line
        description: task.data().description, // add this line
        title: task.data().title, // add this line
        priority: task.data().priority, // add this line
      }));

      console.log(tasks);
      setTasks(tasks);
    };
    getTasks();
  }, []);

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
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Add Task</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add Task</DialogTitle>
              <DialogDescription>Make changes to your profile here. Click save when you're done.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right">Title</Label>
                <Input
                  id="Title"
                  placeholder="Task Title"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right">Description</Label>
                <Input
                  id="Description"
                  placeholder="Task Description"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right">Priority</Label>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Priority" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="Normal">Normal</SelectItem>
                      <SelectItem value="Medium">Medium</SelectItem>
                      <SelectItem value="High">High</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Add Task</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <p className="mt-4 mb-4 text-sm">Tasks of the project:</p>
      <div className="grid grid-cols-4 gap-4 auto-rows-auto">
        {tasks?.map((task) => (
          <Task
            key={task.id}
            task={task}
          />
        ))}
      </div>
    </section>
  );
}
