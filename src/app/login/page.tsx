import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

import { LoginForm } from "./LoginForm";

export default function Login() {
  return (
    <main className=" font-geist-sans max-w-full min-h-screen bg-neutral-950 text-white flex items-center justify-center">
      <Card className="w-[520px] border-1 border-slate-700 bg-neutral-900 text-white">
        <CardHeader className="w-full text-center">
          <CardTitle className="text-xl font-bold">Sign Up</CardTitle>
          <CardDescription>Please fill the form to access to the app.</CardDescription>
        </CardHeader>
        <CardContent>
          <LoginForm />
        </CardContent>
      </Card>
    </main>
  );
}
