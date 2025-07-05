"use client";

import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

export default function Nav() {
  const router = useRouter();
  return (
    <div className="w-full flex pt-7 pb-5 justify-between items-center">
      <div className="text-2xl flex flex-col">
        <h3 className="font-bold">AuthJs</h3>
        <a className="text-lg -mt-2 font-semibold">Codigo Aberto</a>
      </div>
      <div>
        <Button
          onClick={() => router.push("/sobre")}
          className="p-6 rounded-full cursor-pointer"
        >
          Sobre
        </Button>
      </div>
    </div>
  );
}
