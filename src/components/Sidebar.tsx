import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export default function Sidebar() {
  return (
    <section className="h-screen w-min border-r border-gray-200 font-inter">
      <div className="flex justify-between items-center gap-4 p-4">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <h1>Craftlog</h1>
      </div>
      <div>
        <Button
          className="w-full"
          variant="ghost"
        >
          Dashboard
        </Button>
        <Button
          className="w-full"
          variant="ghost"
        >
          Projects
        </Button>
        <Button
          className="w-full"
          variant="ghost"
        >
          Settings
        </Button>
      </div>
    </section>
  );
}
