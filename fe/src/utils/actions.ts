"use server";
import { signIn } from "@/auth";

export async function authenticate(email: string, password: string) {
  try {
    const r = await signIn("credentials", {
      email,
      password,
      redirect: false,
      callbackUrl: "/",
    });

    console.log("res: actions", r);

    return r;
  } catch (error) {
    console.log("error: ===========", (error as any).type);
    if ((error as any).type === "InvalidEmailPassword") {
      return {
        error: "Invalid email or password",
      };
    }
    return {
      error: "Authentication failed",
    };
  }
}
