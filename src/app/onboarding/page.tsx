"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useActionState } from "react";
import React from "react";
import { onBoardingSubmit } from "../actions/authActions";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { onboardingSchema } from "@/lib/zodSchema";
import { SubmitButton } from "@/components/SubmitButtons";

const OnboardingPage = () => {
  const [lastResult, action] = useActionState(onBoardingSubmit, undefined);
  const [form, fields] = useForm({
    lastResult,
    onValidate({ formData }) {
      return parseWithZod(formData, {
        schema: onboardingSchema,
      });
    },
    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });

  return (
    <div className="min-h-screen w-screen flex items-center justify-center  ">
      <Card className="w-96 bg-background shadow-lg px-2">
        <CardHeader>
          <CardTitle className="text-2xl tracking-widest text-center font-extrabold text-gray-600">
            Welcome
          </CardTitle>
          <CardDescription className="text-sm text-muted-foreground text-center">
            Let’s get your schedule ready to go.
          </CardDescription>
        </CardHeader>
        <form
          id={form.id}
          onSubmit={form.onSubmit}
          action={action}
          noValidate
          className="flex flex-col gap-y-6">
          <CardContent className="flex flex-col gap-y-6">
            <div className="flex flex-col gap-y-2 ">
              <Label className="text-sm text-muted-foreground">Full Name</Label>
              <Input
                name={fields.name.name}
                defaultValue={fields.name.initialValue}
                key={fields.name.key}
                placeholder="Enter your Full Name"
              />
              {fields.name.errors && (
                <p className="text-red-500 text-xs mt-1">
                  {fields.name.errors}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-y-2">
              <Label className="text-sm text-muted-foreground">User Name</Label>
              <Input
                name={fields.userName.name}
                defaultValue={fields.userName.initialValue}
                key={fields.userName.key}
                className="text-sm"
                placeholder="Enter your username"
              />
              {fields.userName.errors && (
                <p className="text-red-500 text-xs mt-1">
                  {fields.userName.errors}
                </p>
              )}
            </div>
          </CardContent>
          <CardFooter>
            <SubmitButton text="Get Started" variant="default" />
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default OnboardingPage;
