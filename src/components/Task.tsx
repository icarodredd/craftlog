import { TaskData } from "./Dashboard";
import { Button } from "./ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./ui/card";

export default function Task({ task }: { task: TaskData }) {
  return (
    <Card className="text-clip overflow-hidden break-all">
      <CardHeader>
        <CardTitle>{task.title}</CardTitle>
        <CardDescription>Priority: {task.priority}</CardDescription>
      </CardHeader>
      <CardContent className="h-auto">{task.description}</CardContent>
      <CardFooter>
        <Button size={"sm"}>Complete Task</Button>
      </CardFooter>
    </Card>
  );
}
