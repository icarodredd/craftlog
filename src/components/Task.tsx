import { TaskData } from "./Dashboard";
import { Button } from "./ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./ui/card";

export default function Task({ task }: { task: TaskData }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{task.title}</CardTitle>
        <CardDescription>Priority: {task.priority}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{task.description}</p>
      </CardContent>
      <CardFooter>
        <Button size={"sm"}>Complete Task</Button>
      </CardFooter>
    </Card>
  );
}
