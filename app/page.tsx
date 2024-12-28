"use client";
import React from "react";
import Button from "./components/ui/Button";
import { cn } from "./lib/utils";
import { Poppins } from "next/font/google";
import { LoginButton } from "./components/ui/auth/Login";
let url: String = "https://www.google.com";
const font = Poppins({
  subsets:["latin"],
  weight:["600"]

})
export default function Home() {
 
  
  return (
   <main className="flex h-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800 ">
    <div className="space-y-6 text-center">
      <h1 className={cn("text-6xl font-semibold text-white drop-shadow-md", font.className )}> 🔏AUTH</h1>
      <p className="text-white text-lg">A Simple Authuntication Page </p>
      <div>
      <LoginButton>
        <Button isloading= {false} className="bg-white text-black font-semibold" size='lg'>Sign In </Button>
      </LoginButton>
      </div>
    </div>
    
   </main>
  );
}
