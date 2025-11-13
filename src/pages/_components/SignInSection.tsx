import { Button } from "@/components/ui/button.tsx";
import { Authenticated, Unauthenticated } from "convex/react";
import { useAuth } from "@/hooks/use-auth.ts";
import { UserCircle2, LogOut } from "lucide-react";

export default function SignInSection() {
  const { signoutRedirect, user } = useAuth();

  return (
    <section className="px-4 py-8 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10">
      <div className="mx-auto max-w-4xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-primary/20 shadow-lg">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-chart-2">
              <UserCircle2 className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <Authenticated>
                <h3 className="text-xl font-semibold">Welcome back, {user?.profile.name || "User"}!</h3>
                <p className="text-sm text-muted-foreground">Continue your learning journey</p>
              </Authenticated>
              <Unauthenticated>
                <h3 className="text-xl font-semibold">Ready to Start Learning?</h3>
                <p className="text-sm text-muted-foreground">Signup for Free and get access to 5 free courses instantly</p>
              </Unauthenticated>
            </div>
          </div>
          
          <div>
            <Unauthenticated>
              <a
                href="https://www.csepracticals.com/login/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground shadow-lg shadow-primary/50 hover:shadow-xl hover:shadow-primary/70 transition-all hover:scale-105">
                  SignIn/SignUp
                </Button>
              </a>
            </Unauthenticated>
            <Authenticated>
              <Button 
                size="lg" 
                variant="ghost" 
                onClick={() => signoutRedirect()} 
                className="border border-border hover:shadow-md hover:shadow-accent/30 transition-all"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Sign Out
              </Button>
            </Authenticated>
          </div>
        </div>
      </div>
    </section>
  );
}
