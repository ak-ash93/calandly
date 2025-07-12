"use client";
import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import { githubIcon, googleIcon } from "../../public";
import { cn } from "@/lib/utils";

interface submitButtonProps {
  text: string;
  variant?: "default" | "outline" | "ghost" | "link" | "destructive";
  className?: string;
}

const GoogleAuthButton = () => {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <Button disabled variant="outline" className="w-full">
          <Loader2 className="size-5 mr-2 animate-spin" />
          Loading
        </Button>
      ) : (
        <Button variant={"outline"} className="w-full">
          <Image src={googleIcon} alt="google-icon" className="size-5 mr-2" />{" "}
          Sign Up with Google
        </Button>
      )}
    </>
  );
};

const GithubAuthButton = () => {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <Button disabled variant="outline" className="w-full">
          <Loader2 className="size-5 mr-2 animate-spin" />
          Loading
        </Button>
      ) : (
        <Button variant={"outline"} className="w-full">
          <Image src={githubIcon} alt="github-icon" className="size-5 mr-2" />{" "}
          Sign Up with Github
        </Button>
      )}
    </>
  );
};
const SubmitButton = ({ text, variant, className }: submitButtonProps) => {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <Button disabled variant={"outline"} className="w-full">
          <Loader2 className="size-5 mr-2 animate-spin" />
        </Button>
      ) : (
        <Button variant={variant} className={cn("w-full", className)}>
          {text}
        </Button>
      )}
    </>
  );
};

export { GoogleAuthButton, GithubAuthButton, SubmitButton };
