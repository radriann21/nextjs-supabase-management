import { AccountForm } from "./AccountForm";
import { AccountVisualization } from "./AccountVisualization";
import { createClient } from "@/utils/supabase/server";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default async function AccountPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return <p>no user logged!</p>
  }

  return (
    <section className="max-w-full min-h-screen flex items-center justify-center p-4 bg-neutral-950 text-white font-geist-sans">
      <Tabs defaultValue="account" className="w-[520px]">
        <TabsList className="grid w-full grid-cols-2 bg-neutral-900 text-white">
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="update">Update</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <AccountVisualization userid={user?.id} />
        </TabsContent>
        <TabsContent value="update">
          <AccountForm user={user ?? undefined} />
        </TabsContent>
      </Tabs>
    </section>
  );
}
