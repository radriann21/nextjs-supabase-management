"use client";
import { useRouter } from "next/navigation";
import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getUser } from "@/services/getUser";
import { useState, useEffect } from "react";

type AccountVisualizationProps = {
  userid: string;
};

export const AccountVisualization = ({ userid }: AccountVisualizationProps) => {
  const router = useRouter();
  const [user, setUser] = useState({
    full_name: "",
    username: "",
    website: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (userid) {
      setLoading(true);
      getUser({ userId: userid })
        .then((userData) => {
          setUser(userData);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching user data:", err);
          setError("Failed to load user data.");
          setLoading(false);
        });
    }
  }, [userid]);

  const handleLogout = async () => {
    try {
      const response = await fetch("/auth/signout", {
        method: "POST",
      });

      if (response.redirected) {
        router.push("/login");
      } else {
        console.error("Failed to log out");
      }
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="flex flex-col">
      <main className="flex-1 flex items-center justify-center p-4 md:p-8 text-white">
        <Card className="w-full max-w-md shadow-lg bg-neutral-900">
          <CardContent className="pt-6">
            <div className="flex flex-col items-center space-y-6">
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-primary/60 rounded-full blur opacity-70 group-hover:opacity-100 transition duration-1000"></div>
                <Avatar className="h-32 w-32 border-4 border-background relative">
                  <AvatarImage src="/placeholder.svg?height=400&width=400" alt={user.full_name} />
                  <AvatarFallback className="text-4xl">{user.full_name.charAt(0)}</AvatarFallback>
                </Avatar>
              </div>

              <div className="space-y-2 text-center">
                <h1 className="text-2xl font-bold text-white">{user.full_name}</h1>
                <p className="text-muted-foreground">{user.username}</p>

                {user.website && (
                  <a
                    href={user.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center hover:underline text-white"
                  >
                    <Globe className="mr-1 h-4 w-4" />
                    {user.website.replace(/(^\w+:|^)\/\//, "")}
                  </a>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </main>

      <footer className="w-full flex items-center justify-center flex-col">
        <Button className="mb-2 cursor-pointer" onClick={handleLogout}>Logout</Button>
        <div className="container flex justify-center">
          <p className="text-sm text-muted-foreground">© 2025 UserApp. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

