import { auth } from "@/auth";
import { redirect } from "next/navigation";
import NavDashBoard from "@/components/DashBoard/NavDashBoard";
import WelcomeDashBoard from "@/components/DashBoard/WelcomeDashBoard";

export default async function Page() {
  const session = await auth();

  if (!session?.user) {
    return redirect("/login");
  }

  return (
    <div className="flex flex-col gap-6">
      <NavDashBoard />
      <WelcomeDashBoard />
    </div>
  );
}
