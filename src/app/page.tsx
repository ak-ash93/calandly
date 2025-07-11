import Navbar from "@/components/Navbar";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth();
  if (session?.user) redirect("/dashboard");
  return (
    <>
      <div className="max-w-7xl mx-auto">
        <Navbar />
      </div>
    </>
  );
}
