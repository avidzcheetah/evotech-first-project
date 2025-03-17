import { Suspense } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Shell } from "lucide-react";
import UserData from "./user-data";

export default function UsersPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold hidden">Users</h1>
      <Card>
        <CardHeader>
          <CardTitle>User Management</CardTitle>
          <CardDescription>View and manage user accounts.</CardDescription>
        </CardHeader>
        <CardContent>
          <Suspense
            fallback={
              <div className="flex justify-center items-center h-[186.5px]">
                <Shell className="animate-spin duration-1000 text-primary-400" />
              </div>
            }
          >
            <UserData />
          </Suspense>
        </CardContent>
      </Card>
    </div>
  );
}
