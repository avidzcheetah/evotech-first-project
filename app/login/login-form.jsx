/* "use client";

import { useState } from "react";
import { redirect } from "next/navigation";
import { signIn } from "@/lib/auth-client";
// import { loginUser } from "@/lib/apis/server";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validateForm = () => {
    if (!email) {
      setEmailError("Email is required!");
      return false;
    } else {
      setEmailError("");
    }
    if (!password) {
      setPasswordError("Password is required!");
      return false;
    } else {
      setPasswordError("");
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      const login = await loginUser({ email: email, password: password });
      console.log("LOGIN RESPONSE", login);
    }
  };

  return (
    <div className="w-[400px] mx-auto">
      <div className=" bg-blue-50/90 shadow-xl border border-gray-200 rounded-lg p-4">
        <form onSubmit={handleSubmit} className="space-y-6">
          <h3 className="text-center text-xl font-semibold text-gray-900">
            Sign in to MFlix
          </h3>

          <div>
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-900 block mb-2 dark::text-gray-300"
            >
              Your Email
            </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              className="bg-gray-50 border border-gray-300 rounded-xl text-gray-900 focus:ring-1 focus:ring-offset-1 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Enter email address"
            />
            {emailError && (
              <div className="text-red-600 text-xs mt-2 ml-1">{emailError}</div>
            )}
          </div>

          <div>
            <label
              htmlFor="password"
              className="text-sm font-medium text-gray-900 block mb-2 dark::text-gray-300"
            >
              Your Password
            </label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              className="bg-gray-50 border border-gray-300 rounded-xl text-gray-900 focus:ring-1 focus:ring-offset-1 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Enter password"
            />
            {passwordError && (
              <div className="text-red-600 text-xs mt-2 ml-1">
                {passwordError}
              </div>
            )}
          </div>

          <div className="flex">
            <div className="flex">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  className="bg-gray-50 border border-gray-300 focus:ring-2 focus:ring-blue-300 h-4 w-4 rounded"
                />
              </div>
              <div className="text-sm ml-3">
                <label htmlFor="remember" className="font-medium text-gray-900">
                  Remember me
                </label>
              </div>
            </div>

            <a
              href="/forget-password"
              className="text-sm text-blue-700 hover:underline ml-auto"
            >
              Forget password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full text-white bg-black rounded-lg hover:bg-gray-700 focus:ring-4 focus:ring-blue-300 text-sm px-5 py-2.5"
          >
            Sign In
          </button>
          <div className="flex justify-center text-sm font-medium text-gray-500 space-x-1">
            <span>Not Registered?</span>
            <a href="/register" className="text-blue-700 hover:underline">
              Create an account
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
 */

"use client";

import { useState } from "react";
import { redirect } from "next/navigation";
import { signIn } from "@/lib/auth-client";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/hooks/use-toast";
// import { loginUser } from "@/lib/apis/server";
const DEFAULT_ERROR = {
  error: false,
  message: "",
};

// Client component for CSR
export default function LoginForm({ title }) {
  const [error, setError] = useState(DEFAULT_ERROR);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const { toast } = useToast();

  const validateForm = () => {
    if (!email) {
      setEmailError("Email is required!");
      return false;
    } else {
      setEmailError("");
    }

    if (!password) {
      setPasswordError("Password is required!");
      return false;
    } else {
      setPasswordError("");
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isValid = validateForm();

    if (isValid) {
      await signIn.email(
        {
          email,
          password,
        },
        {
          onSuccess: () => {
            toast({
              variant: "success",
              title: "Login successful!",
              description: "Redirecting to the dashboard...",
              action: (
                <ToastAction altText="Continue" className="hover:bg-green-700">
                  Continue
                </ToastAction>
              ),
            });
            redirect("/dashboard");
          },
          onError: (ctx) => {
            console.log(ctx.error.message);
            setError({ error: true, message: ctx.error.message });
          },
        }
      );
    }
  };

  return (
    <div className="w-[380px] mx-auto">
      <div className="bg-white shadow-md border border-gray-200 rounded-lg p-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* title */}
          <h3 className="text-center text-xl font-semibold text-gray-900">
            Sign in to MFlix
          </h3>

          {/* email */}
          <div>
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-900 block mb-2"
            >
              Your email
            </label>

            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-gray-50 border border-gray-300 rounded-lg text-gray-900 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="yourname@email.com"
            />

            {emailError && (
              <div className="text-red-600 text-xs mt-2 ml-1">{emailError}</div>
            )}
          </div>

          {/* password */}
          <div>
            <label
              htmlFor="password"
              className="text-sm font-medium text-gray-900 block mb-2"
            >
              Your password
            </label>

            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-gray-50 border border-gray-300 rounded-lg text-gray-900 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="••••••••"
            />

            {passwordError && (
              <div className="text-red-600 text-xs mt-2 ml-1">
                {passwordError}
              </div>
            )}
          </div>

          {/* remember me */}
          <div className="flex justify-between">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  className="bg-gray-50 border border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"
                />
              </div>

              <div className="text-sm ml-3">
                <label htmlFor="remember" className="font-medium text-gray-900">
                  Remember me
                </label>
              </div>
            </div>

            <a
              href="/forget-password"
              className="text-sm text-blue-700 font-medium hover:underline"
            >
              Lost Password?
            </a>
          </div>

          <div className="flex justify-center">
            {error?.error && (
              <span className="text-red-600 text-xs text-center animate-pulse duration-1000">
                {error.message}
              </span>
            )}
          </div>

          {/* submit button */}
          <button
            type="submit"
            className="w-full text-white bg-black hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5"
          >
            Sign in
          </button>

          <div className="flex justify-center text-sm font-medium text-gray-500 space-x-1">
            <span>Not registered?</span>
            <a href="/register" className="text-blue-700 hover:underline">
              Create an account
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
