import { TaskData } from "./Dashboard";
import { Button } from "./ui/button";
import { Firestore, setDoc, doc } from "firebase/firestore";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./ui/card";

export default function Task({ task, db }: { task: TaskData; db: Firestore }) {
  const handleClick = async () => {
    if (task.completed) await setDoc(doc(db, "tasks", `${task.id}`), { ...task, completed: false });
    else await setDoc(doc(db, "tasks", `${task.id}`), { ...task, completed: true });
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
