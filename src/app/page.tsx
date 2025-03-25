import { User, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FunctionsSection } from "@/components/app/FunctionsSection"

import Link from "next/link"

export default function Home() {
  return (
    <main className="max-w-full min-h-screen font-geist-sans bg-neutral-950">
      <header className="border-b border-b-gray-600/30">
        <div className="container mx-auto flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <User className="h-6 w-6 text-gray-300" />
            <span className="text-xl font-bold text-white">UserApp</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button className="cursor-pointer px-8 hover:bg-neutral-800">
                Sign in
              </Button>
            </Link>
          </div>
        </div>
      </header>
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <h1 className="text-5xl font-bold tracking-tighter text-white">
              User management very <span className="text-blue-600">simplified</span>
            </h1>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              A intuitive platform for managing users with comfy interface
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-8 items-center justify-center">
            <Link href="/login">
              <Button size="lg" className="group cursor-pointer">
                Start now
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <FunctionsSection />
    </main>
  )
}