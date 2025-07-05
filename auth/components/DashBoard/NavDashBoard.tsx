"use client";

import { useSession } from "next-auth/react";
import { Skeleton } from "../ui/skeleton";
import ButtonLogout from "../logout/ButtonLogout";

export default function NavDashBoard() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <Skeleton className="w-full flex justify-center rounded-none items-center h-[120px]" />
    );
  }

  return (
    <div className="w-full flex pt-7 pb-5 justify-between items-center">
      <div className="text-2xl flex flex-col">
        <h3 className="font-bold">AuthJs</h3>
        <a className="text-lg -mt-2 font-semibold">Bem Vindo</a>
      </div>
      <div>
        <ButtonLogout />
      </div>
    </div>
  );
}
