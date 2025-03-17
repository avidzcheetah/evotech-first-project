"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

export default function SettingsPage() {
  const [siteName, setSiteName] = useState("My Dashboard");
  const [darkMode, setDarkMode] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updating settings:", {
      siteName,
      darkMode,
      emailNotifications,
    });
  };

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold hidden">Settings</h1>
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>General Settings</CardTitle>
          <CardDescription>Manage your dashboard preferences.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="site-name">Site Name</Label>
              <Input
                id="site-name"
                value={siteName}
                onChange={(e) => setSiteName(e.target.value)}
              />
            </div>
            <div className="flex items-center space-x-2">
              <Switch
                id="dark-mode"
                checked={darkMode}
                onCheckedChange={setDarkMode}
              />
              <Label htmlFor="dark-mode">Dark Mode</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch
                id="email-notifications"
                checked={emailNotifications}
                onCheckedChange={setEmailNotifications}
              />
              <Label htmlFor="email-notifications">Email Notifications</Label>
            </div>
            <Button
              type="submit"
              className="bg-primary-400 hover:bg-primary-400/90"
            >
              Save Settings
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
