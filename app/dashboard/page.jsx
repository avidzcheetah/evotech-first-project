"use client";

import { Suspense } from "react";
import CountUp from "react-countup";
import { Clapperboard, Users, FolderOpenDot, Shell } from "lucide-react";
import { DataTable } from "@/app/dashboard/components/data-table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
        Welcome to your Dashboard
      </h1>
      <p className="text-muted-foreground md:text-lg">
        Get a quick overview of your application metrics and insights.
      </p>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="bg-gradient-to-br from-purple-500 to-indigo-500 text-white">
          <CardHeader className="flex flex-row items-center justify-between space-y-0">
            <div className="space-y-1.5">
              <CardTitle>Total Movies</CardTitle>
              <CardDescription className="text-purple-100">
                Movies added to the platform
              </CardDescription>
            </div>
            <Clapperboard className="w-6 h-6 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            {/* <p className="text-4xl font-bold">234</p> */}
            <CountUp
              end={234}
              duration={5}
              delay={2}
              className="text-4xl font-bold"
            />
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-pink-500 to-red-500 text-white">
          <CardHeader className="flex flex-row items-center justify-between space-y-0">
            <div className="space-y-1.5">
              <CardTitle>Total Users </CardTitle>
              <CardDescription className="text-pink-100">
                Active accounts on the platform
              </CardDescription>
            </div>
            <Users className="w-6 h-6 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <CountUp
              end={12}
              duration={5}
              delay={2}
              className="text-4xl font-bold"
            />
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-green-500 to-teal-500 text-white">
          <CardHeader className="flex flex-row items-center justify-between space-y-0">
            <div className="space-y-1.5">
              <CardTitle>Active Projects</CardTitle>
              <CardDescription className="text-green-100">
                Ongoing projects this week
              </CardDescription>
            </div>
            <FolderOpenDot className="w-6 h-6 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <CountUp
              end={42}
              duration={5}
              delay={2}
              className="text-4xl font-bold"
            />
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl text-gray-800">
            Recent Movies
          </CardTitle>
          <CardDescription>View and manage your latest entries</CardDescription>
        </CardHeader>
        <CardContent>
          <Suspense
            fallback={
              <div className="flex justify-center items-center h-[186.5px]">
                <Shell className="animate-spin duration-1000 text-primary-400" />
              </div>
            }
          >
            <DataTable />
          </Suspense>
        </CardContent>
      </Card>
    </div>
  );
}
