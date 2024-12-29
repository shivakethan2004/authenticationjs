"use client";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Button from "../Button";

export const Social = () => {
  return (
    <div className="flex items-center justify-center w-full gap-x-2">
      <Button isloading={false} className="shadow-md" size="lg" variant='ghost'>
        <FcGoogle></FcGoogle>
      </Button>
      <Button isloading={false} size="lg" className="shadow-md" variant='ghost' >
        <FaGithub></FaGithub>
      </Button>
    </div>
  );
};
