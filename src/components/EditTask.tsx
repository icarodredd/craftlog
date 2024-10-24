import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, SelectGroup } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "./ui/button";
import { useState } from "react";
import { TaskData } from "./Dashboard";
import { collection, doc, Firestore, getDocs, setDoc } from "firebase/firestore";

export default function EditTask({ task, db, setTasks }: { task: TaskData; db: Firestore, setTasks:React.Dispatch<React.SetStateAction<TaskData[] | undefined>> }) {
  const [editTask, setEditTask] = useState<TaskData>();
  const [submited, setSubmited] = useState(false);

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    await setDoc(doc(db, "tasks", `${task.id}`), editTask);

    setSubmited(true);
   
    const getTasks = async () => {
      const data = await getDocs(collection(db, "tasks"));
      const tasks = data.docs.map((task) => ({
        ...task.data(),
        id: task.id,
        completed: task.data().completed,
        description: task.data().description,
        title: task.data().title,
        priority: task.data().priority,
      }));

      setTasks(tasks);
    };
    getTasks();
    
    const interval = setInterval(() => setSubmited(false), 10000);
    clearInterval(interval);

  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit Task</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Task</DialogTitle>
          <DialogDescription>Edit task here. Click submit when you're done.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right">Title</Label>
            <Input
              onChange={(e) => setEditTask({ ...editTask, title: e.target.value })}
              required
              id="Title"
              placeholder="Task Title"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right">Description</Label>
            <Input
              onChange={(e) => setEditTask({ ...editTask, description: e.target.value })}
              required
              id="Description"
              placeholder="Task Description"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right">Priority</Label>
            <Select
              required
              onValueChange={(value) => setEditTask({ ...editTask, priority: value })}
            >
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
          <Button onClick={(e) => handleClick(e)}>Submit</Button>
        </DialogFooter>
        {submited && <span className="text-right">Task added successfully.</span>}
      </DialogContent>
    </Dialog>
  );
}
