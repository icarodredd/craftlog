import { TaskData } from "./Dashboard";
import { Button } from "./ui/button";
import { TrashIcon } from "@radix-ui/react-icons";
import { Firestore, setDoc, doc, getDocs, collection, deleteDoc } from "firebase/firestore";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./ui/card";
import EditTask from "./EditTask";

export default function Task({
  task,
  db,
  setTasks,
}: {
  task: TaskData;
  db: Firestore;
  setTasks: React.Dispatch<React.SetStateAction<TaskData[] | undefined>>;
}) {
  const handleSubmitClick = async () => {
    if (task.completed) await setDoc(doc(db, "tasks", `${task.id}`), { ...task, completed: false });
    else await setDoc(doc(db, "tasks", `${task.id}`), { ...task, completed: true });
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
  };

  const handleDelete = async () => {
    await deleteDoc(doc(db, "tasks", `${task.id}`));

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
  };

  return (
    <Card className="text-clip overflow-hidden break-all w-full">
      <CardHeader>
        <CardTitle>{task.title}</CardTitle>
        <CardDescription>
          Priority: {task.priority} <br />
          {task.completed && "The task is already done."}
        </CardDescription>
      </CardHeader>
      <CardContent className="h-auto">{task.description} </CardContent>
      <CardFooter className="flex justify-between">
        {task.completed ? (
          <Button
            onClick={() => handleSubmitClick()}
            size={"sm"}
          >
            Mark as not completed
          </Button>
        ) : (
          <Button
            onClick={() => handleSubmitClick()}
            size={"sm"}
          >
            Complete Task
          </Button>
        )}
        <EditTask
          setTasks={setTasks}
          task={task}
          db={db}
        />
        <Button
          onClick={() => handleDelete()}
          variant={"destructive"}
        >
          <TrashIcon />
        </Button>
      </CardFooter>
    </Card>
  );
}
