import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { HomeIcon } from "@radix-ui/react-icons";
import logo from "@/assets/craftlog.png";

export default function Sidebar() {
  return (
    <section className="h-screen w-60 font-inter">
      <div className="flex justify-center items-center gap-4 p-4">
        <Avatar>
          <AvatarImage src={logo} />
          <AvatarFallback>CL</AvatarFallback>
        </Avatar>
        <h1>Craftlog</h1>
      </div>
      <div>
        <Button
          className="w-full"
          variant="ghost"
        >
          <HomeIcon />
          Dashboard
        </Button>
      </div>
    </section>
  );
}
