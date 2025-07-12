"use server";

import { signIn, signOut } from "@/lib/auth";
import { ensureAuthorized } from "@/lib/hooks";
import { prisma } from "@/lib/prisma";
import { onboardingSchema } from "@/lib/zodSchema";
import { parseWithZod } from "@conform-to/zod";
import { redirect } from "next/navigation";

export async function signInWithGoogle() {
  await signIn("google");
}
export async function signInWithGithub() {
  await signIn("github");
}

export async function logOut() {
  await signOut();
}

export async function onBoardingSubmit(prevState: unknown, formdata: FormData) {
  const userSession = await ensureAuthorized();
  const submission = parseWithZod(formdata, {
    schema: onboardingSchema,
  });

  if (submission.status !== "success") {
    return submission.reply();
  }

  await prisma.user.update({
    where: { id: userSession?.user?.id },
    data: {
      userName: submission.value.userName,
      name: submission.value.name,
    },
  });

  redirect("/dashboard");
}
