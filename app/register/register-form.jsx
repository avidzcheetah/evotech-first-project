"use client";

import Link from "next/link";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { redirect } from "next/navigation";
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
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";
// import { registerUser } from "@/lib/apis/server";
import { signUp } from "@/lib/auth-client";

const DEFAULT_ERROR = {
  error: false,
  message: "",
};

export default function RegisterForm() {
  const [error, setError] = useState(DEFAULT_ERROR);
  const [isLoading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmitForm = async (event) => {
    event?.preventDefault();
    const formData = new FormData(event?.currentTarget);
    const name = formData.get("name").toString();
    const email = formData.get("email").toString();
    const password = formData.get("password") ?? "";
    const confirmPassword = formData.get("confirm-password") ?? "";
    console.log(name, email, password, confirmPassword);

    if (name && email && password && confirmPassword) {
      if (password === confirmPassword) {
        setError(DEFAULT_ERROR);
        /* setLoading(true);
        const registerResp = await registerUser({ name, email, password });
        setLoading(false);
        if (registerResp?.error) {
          setError({ error: true, message: registerResp.error });
        } else {
          toast({
            variant: "success",
            title: "Registration successful!",
            description: "Please continue with login",
            action: (
              <ToastAction altText="Login" className="hover:bg-green-700">
                Login
              </ToastAction>
            ),
          });
        } */
        setLoading(true);
        const { data, error } = await signUp.email(
          {
            email: email,
            password: password,
            name: name,
            image: undefined,
          },
          {
            onRequest: (ctx) => {
              console.log("onRequest", ctx);
            },
            onSuccess: (ctx) => {
              console.log("onSuccess", ctx);
              toast({
                variant: "success",
                title: "Registration successful!",
                description: "Redirecting to the dashboard...",
                action: (
                  <ToastAction
                    altText="Continue"
                    className="hover:bg-green-700"
                  >
                    Continue
                  </ToastAction>
                ),
              });
              redirect("/dashboard");
            },
            onError: (ctx) => {
              if (ctx) {
                setError({ error: true, message: ctx.error.message });
              }
            },
          }
        );
        setLoading(false);

        if (data) {
          console.log("data", data);
        }
      } else {
        setError({ error: true, message: "Passwords doesn't match" });
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <Card className="bg-white w-[350px]">
        <CardHeader>
          <CardTitle className="text-center">Create an account</CardTitle>
          <CardDescription className="text-xs text-center">
            Enter your information to get started
          </CardDescription>
        </CardHeader>

        <form onSubmit={handleSubmitForm}>
          <CardContent>
            <div className="flex flex-col space-y-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" placeholder="Avidu Witharana" />
              </div>

              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="avidu@example.com"
                />
              </div>

              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter new password"
                />
              </div>

              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="confirm-password">Confirm Password</Label>
                <Input
                  id="confirm-password"
                  name="confirm-password"
                  type="password"
                  placeholder="Enter password again to confirm"
                />
              </div>

              <div className="flex justify-center">
                {error?.error && (
                  <span className="text-red-600 text-xs text-center animate-pulse duration-1000">
                    {error.message}
                  </span>
                )}
              </div>

              <div className="flex justify-center gap-1 text-xs">
                Already have an account?{" "}
                <Link href="/login" className="text-blue-600 hover:underline">
                  Login
                </Link>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button className="flex-1" type="submit" disabled={isLoading}>
              {isLoading && <Loader2 className="animate-spin" />}
              Register
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
