"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Shield, Brain, Eye, Zap, Info } from "lucide-react"
import { DetectionInterface } from "@/components/detection-interface"
import { EducationalContent } from "@/components/educational-content"
import { TechniquesOverview } from "@/components/techniques-overview"
import { CaseStudies } from "@/components/case-studies"

export default function DetectorPage() {
  const [activeTab, setActiveTab] = useState("detect")

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-slate-900 dark:to-indigo-900">
      {/* Header */}
      <header className="border-b border-indigo-100 bg-white/90 backdrop-blur-sm dark:bg-slate-900/90 dark:border-indigo-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-xl shadow-lg">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  AI vs AI
                </h1>
                <p className="text-sm text-indigo-600 dark:text-indigo-400">Deepfake Detection System</p>
              </div>
            </div>
            <Badge
              variant="outline"
              className="bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-900/20 dark:text-emerald-400"
            >
              <Brain className="w-3 h-3 mr-1" />
              AI Powered
            </Badge>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 bg-clip-text text-transparent">
            Advanced Deepfake Detection
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Harness the power of AI to detect AI-generated content. Our advanced detection system uses multiple neural
            networks to identify deepfakes with high accuracy.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card className="bg-gradient-to-br from-blue-500 to-cyan-500 text-white border-0 shadow-lg">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold">98.7%</div>
              <div className="text-sm text-blue-100">Detection Accuracy</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-emerald-500 to-teal-500 text-white border-0 shadow-lg">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold">{"<2s"}</div>
              <div className="text-sm text-emerald-100">Analysis Time</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-purple-500 to-violet-500 text-white border-0 shadow-lg">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold">15+</div>
              <div className="text-sm text-purple-100">Detection Models</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-orange-500 to-red-500 text-white border-0 shadow-lg">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold">1M+</div>
              <div className="text-sm text-orange-100">Images Analyzed</div>
            </CardContent>
          </Card>
        </div>

        {/* Main Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-white/80 backdrop-blur-sm border border-indigo-100 shadow-lg">
            <TabsTrigger
              value="detect"
              className="flex items-center space-x-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-indigo-500 data-[state=active]:to-purple-500 data-[state=active]:text-white"
            >
              <Eye className="w-4 h-4" />
              <span>Detect</span>
            </TabsTrigger>
            <TabsTrigger
              value="learn"
              className="flex items-center space-x-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white"
            >
              <Brain className="w-4 h-4" />
              <span>Learn</span>
            </TabsTrigger>
            <TabsTrigger
              value="techniques"
              className="flex items-center space-x-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500 data-[state=active]:to-rose-500 data-[state=active]:text-white"
            >
              <Zap className="w-4 h-4" />
              <span>Techniques</span>
            </TabsTrigger>
            <TabsTrigger
              value="cases"
              className="flex items-center space-x-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-rose-500 data-[state=active]:to-orange-500 data-[state=active]:text-white"
            >
              <Info className="w-4 h-4" />
              <span>Case Studies</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="detect">
            <DetectionInterface />
          </TabsContent>

          <TabsContent value="learn">
            <EducationalContent />
          </TabsContent>

          <TabsContent value="techniques">
            <TechniquesOverview />
          </TabsContent>

          <TabsContent value="cases">
            <CaseStudies />
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="border-t border-indigo-100 bg-white/90 backdrop-blur-sm dark:bg-slate-900/90 dark:border-indigo-800 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-sm text-slate-600 dark:text-slate-300">
            <p className="mb-2">
              This is a demonstration of deepfake detection technology. Always verify important content through multiple
              sources.
            </p>
            <p className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent font-medium">
              Built with AI SDK and Next.js • Educational purposes only
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
