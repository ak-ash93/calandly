import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { GithubAuthButton, GoogleAuthButton } from "./SubmitButtons";
import { signInWithGithub, signInWithGoogle } from "@/app/actions/authActions";

const DialogModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"default"}>Get Started for Free</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-center ">
            <p className="text-2xl tracking-wider text-primary mb-1.5 font-bold">
              Welcome to Calandly
            </p>
            <p className="text-xs text-gray-500">
              Effortless scheduling, redefined.
            </p>
          </DialogTitle>
          <div className="flex flex-col gap-3  mt-4">
            <form action={signInWithGoogle} className="w-full">
              <GoogleAuthButton />
            </form>
            <form className="w-full" action={signInWithGithub}>
              <GithubAuthButton />
            </form>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default DialogModal;
