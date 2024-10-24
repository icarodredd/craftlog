import { TaskData } from "./Dashboard";
import { Button } from "./ui/button";
import { Firestore, setDoc, doc, getDocs, collection } from "firebase/firestore";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./ui/card";

export default function Task({
  task,
  db,
  setTasks,
}: {
  task: TaskData;
  db: Firestore;
  setTasks: React.Dispatch<React.SetStateAction<TaskData[] | undefined>>;
}) {
  const handleClick = async () => {
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

  return (
    <Card className="text-clip overflow-hidden break-all">
      <CardHeader>
        <CardTitle>{task.title}</CardTitle>
        <CardDescription>
          Priority: {task.priority} <br />
          {task.completed && "The task is already done."}
        </CardDescription>
      </CardHeader>
      <CardContent className="h-auto">{task.description} </CardContent>
      <CardFooter>
        {task.completed ? (
          <Button
            onClick={() => handleClick()}
            size={"sm"}
          >
            Mark as not completed
          </Button>
        ) : (
          <Button
            onClick={() => handleClick()}
            size={"sm"}
          >
            Complete Task
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
