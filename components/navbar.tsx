import Image from "next/image";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="flex max-w-[1440px] box-border w-full justify-between items-center h-20 md:px-5 px-2 bg-white drop-shadow-md">
      <Image
        alt="logo"
        src={"/kaboor-logo.svg"}
        className="md:w-[150px] md:h-[50px] w-20 h-16"
        width={150}
        height={50}
      />
      <div className="flex md:gap-4 gap-2">
        <Button
          variant={"outline"}
          className="border-primary-violet-bright lg:w-[127px] md:text-normal text-xs w-14"
        >
          Register
        </Button>
        <Button className="btn-primary lg:w-[127px] md:text-normal text-xs w-14">
          Login
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
