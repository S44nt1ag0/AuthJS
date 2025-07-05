"use client";

import { useSession } from "next-auth/react";
import { Skeleton } from "../ui/skeleton";

export default function WelcomeDashBoard() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <Skeleton className="w-full flex justify-center rounded-none items-center h-[300px]" />
    );
  }

  return (
    <div className="w-full flex flex-col justify-center items-center rounded-3xl h-[300px] bg-gradient-to-b from-black/10 to-transparent">
      <h1 className="text-4xl font-extrabold">Bem-Vindo</h1>
      <h3 className="text-2xl font-bold">{session?.user?.id}</h3>
    </div>
  );
}
