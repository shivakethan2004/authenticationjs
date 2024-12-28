"use client";

import { ReactNode, use } from "react";
import { useRouter } from "next/navigation";
interface LoginProps {
  children: ReactNode;
  mode: "model" | "redirect";
  aschild?: boolean;
}
export const LoginButton = ({
  children,
  mode = "redirect",
  aschild,
}: LoginProps) => {
    const router = useRouter()
  const onClick = () => {
    router.push("/auth/Login")
  };
  if(mode =='model'){
    return (<span>
        TODO:Implemented Model
    </span>)
  }
  return (
    <span onClick={onClick} className="cursor-pointer">
      {children}
    </span>
  );
};
