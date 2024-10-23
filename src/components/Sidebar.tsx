import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { HomeIcon, ArchiveIcon } from "@radix-ui/react-icons";

export default function Sidebar({ setPage }: { setPage: React.Dispatch<React.SetStateAction<string>> }) {
  return (
    <section className="h-screen w-60 border-r border-gray-800 font-inter">
      <div className="flex justify-center items-center gap-4 p-4">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <h1>Craftlog</h1>
      </div>
      <div>
        <Button
          onClick={() => setPage("dashboard")}
          className="w-full"
          variant="ghost"
        >
          <HomeIcon />
          Dashboard
        </Button>
        <Button
          onClick={() => setPage("projects")}
          className="w-full"
          variant="ghost"
        >
          <ArchiveIcon />
          Projects
        </Button>
      </div>
    </section>
  );
}
