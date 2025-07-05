"use client";

import { useSession, signOut } from "next-auth/react";
import { Button } from "../ui/button";

export default function ButtonLogout() {
  async function handleClick() {
    const data = await signOut({ redirect: false });
    if (data.url) window.location.href = data.url;
  }
  return (
    <Button
      variant="outline"
      className="p-6 rounded-full dark cursor-pointer"
      onClick={handleClick}
    >
      <h3 className="text-white">Logout</h3>
    </Button>
  );
}
