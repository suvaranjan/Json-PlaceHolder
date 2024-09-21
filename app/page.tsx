"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    name: "Posts",
    description: "Explore the latest posts from our API.",
    icon: "📝",
    color: "from-pink-500 to-rose-500",
    link: "/posts", // link to the posts page
  },
  {
    name: "Users",
    description: "Discover user profiles and interactions.",
    icon: "👤",
    color: "from-blue-500 to-cyan-500",
    link: "/users", // link to the users page
  },
  {
    name: "Todos",
    description: "Track and manage todo items efficiently.",
    icon: "✅",
    color: "from-green-500 to-emerald-500",
    link: "/todos", // link to the todos page
  },
];

export default function Home() {
  useEffect(() => {
    const html = document.querySelector("html");
    if (html) html.style.scrollBehavior = "smooth";
    return () => {
      if (html) html.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen ">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-24 xl:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-gray-200/50 dark:bg-grid-gray-800/50 bg-[size:30px_30px] [mask-image:radial-gradient(ellipse_at_center,black_70%,transparent_100%)]" />
          <div className="container px-4 md:px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center space-y-4 text-center"
            >
              <div className="inline-block rounded-lg bg-gray-100 dark:bg-gray-800 px-3 py-1 text-sm text-gray-600 dark:text-gray-400 mb-4">
                Discover JSONPlaceholder API Data
              </div>

              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 animate-gradient-flow">
                Explore the Power of APIs
              </h1>

              <p className="mx-auto max-w-[700px] text-gray-600 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Discover dynamic API data with JSONPlaceholder. Dive into a
                world of posts, users, and todos while mastering Next.js through
                interactive experiences.
              </p>

              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
              >
                <Link href="#features">Get Started</Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="grid gap-6 lg:grid-cols-3 lg:gap-12"
            >
              {features.map((feature) => (
                <Link key={feature.name} href={feature.link} passHref>
                  <Card className="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-75 group-hover:opacity-100 transition-opacity duration-300`}
                    />
                    <CardContent className="relative z-10 p-6 text-center">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="flex flex-col items-center space-y-4"
                      >
                        <div className="text-5xl">{feature.icon}</div>
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {feature.name}
                        </h3>
                        <p className="text-white/90">{feature.description}</p>
                      </motion.div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="w-full py-6">
        <div className="container flex flex-col gap-2 sm:flex-row items-center justify-between px-4 md:px-6">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © 2024 JSONPlaceholder Explorer. All rights reserved.
          </p>
          <nav className="flex gap-4 sm:gap-6">
            <Link
              className="text-sm hover:underline underline-offset-4 text-gray-600 dark:text-gray-400"
              href="#"
            >
              Terms of Service
            </Link>
            <Link
              className="text-sm hover:underline underline-offset-4 text-gray-600 dark:text-gray-400"
              href="#"
            >
              Privacy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
