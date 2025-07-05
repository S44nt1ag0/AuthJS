"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">Bem Vindo ao Auth</h1>
      <a>Sistema feito usando AuthJS</a>
      <Button className="rounded-full mt-4 p-7 pl-10 pr-10 cursor-pointer" onClick={() => router.push('/login')}>
        <h3 className="font-2xl text-lg">Login</h3>
      </Button>
    </div>
  );
}
