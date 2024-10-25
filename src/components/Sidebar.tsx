import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { HomeIcon } from "@radix-ui/react-icons";
import logo from "@/assets/craftlog.png";

export default function Sidebar() {
  return (
    <section className="h-screen w-40 font-inter max-lg:h-min max-md:flex max-lg:items-center max-lg:justify-between max-md:w-screen">
      <div className="flex justify-center items-center gap-4 p-4">
        <Avatar>
          <AvatarImage
            alt="Craftlog"
            src={logo}
          />
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
