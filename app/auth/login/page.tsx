import { redirect } from "next/navigation";

import LoginForm from "@/components/login-form";

import { getSession } from "@/lib/auth";

export default async function LoginPage() {
  const session = await getSession();

  if (session) {
    redirect("/register");
  }

  return (
    <LoginForm />
  );
}
