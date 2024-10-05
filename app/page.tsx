"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Moon, Sun, Award } from "lucide-react";
import { useTheme } from "next-themes";
import CertificatePreview from "@/components/CertificatePreview";
import { generatePDF } from "@/lib/pdfGenerator";

export default function CertiCraft() {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [date, setDate] = useState("");
  const { theme, setTheme } = useTheme();

  const handleGeneratePDF = () => {
    generatePDF(name, course, date);
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-4">
      <header className="flex justify-between items-center w-full max-w-2xl mb-8">
        <div className="flex items-center space-x-2">
          <Award className="w-8 h-8 text-primary" />
          <h1 className="text-3xl font-bold text-primary">CertiCraft</h1>
        </div>
        <div className="flex items-center space-x-2">
          <Sun className="h-4 w-4" />
          <Switch
            checked={theme === "dark"}
            onCheckedChange={() =>
              setTheme(theme === "dark" ? "light" : "dark")
            }
            aria-label="Toggle dark mode"
          />
          <Moon className="h-4 w-4" />
        </div>
      </header>

      <main className="w-full max-w-2xl space-y-6">
        <div className="space-y-4">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter recipient's name"
            />
          </div>
          <div>
            <Label htmlFor="course">Course</Label>
            <Input
              id="course"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
              placeholder="Enter course name"
            />
          </div>
          <div>
            <Label htmlFor="date">Date</Label>
            <Input
              id="date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <Button onClick={handleGeneratePDF} className="w-full">
            Generate PDF Certificate
          </Button>
        </div>

        <CertificatePreview name={name} course={course} date={date} />
      </main>

      <footer className="mt-8"></footer>
    </div>
  );
}
