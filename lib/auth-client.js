import { createAuthClient } from "better-auth/react";

// AuthClient
export const { signIn, signUp, signOut, useSession } = createAuthClient({
  baseURL: process.env.BETTER_AUTH_URL,
});
