import { auth } from "./auth";
import { redirect } from "next/navigation";

export async function ensureAuthorized() {
  // Ensure the user is authenticated, If not authenticated, redirect to the home page
  const session = await auth();
  if (!session?.user) {
    redirect("/");
  }
  return session;
}
