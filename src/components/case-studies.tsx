import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Users, TrendingUp, AlertTriangle, CheckCircle, Globe, Shield } from "lucide-react"

export function CaseStudies() {
  const caseStudies = [
    {
      id: "political",
      title: "Political Deepfake Detection",
      category: "Politics",
      year: "2024",
      impact: "High",
      description: "Detection of deepfake videos during election campaigns",
      challenge: "Rapid spread of political deepfakes on social media platforms during critical election periods.",
      solution: "Real-time detection system deployed across major social platforms with 96% accuracy.",
      outcome: "Successfully identified and flagged over 10,000 deepfake videos, preventing widespread misinformation.",
      techniques: ["Ensemble CNN-RNN", "Temporal Analysis", "Facial Landmark Detection"],
      metrics: {
        accuracy: 96,
        processingTime: "1.2s",
        falsePositives: "2.1%",
        coverage: "15M users",
      },
    },
    {
      id: "celebrity",
      title: "Celebrity Deepfake Fraud",
      category: "Entertainment",
      year: "2023",
      impact: "Medium",
      description: "Detecting fraudulent celebrity endorsement videos",
      challenge: "High-quality deepfakes of celebrities used in fraudulent investment schemes.",
      solution: "Multi-modal detection combining facial analysis with voice pattern recognition.",
      outcome: "Prevented estimated $50M in fraud losses by early detection and platform removal.",
      techniques: ["Vision Transformers", "Audio-Visual Sync", "Biometric Analysis"],
      metrics: {
        accuracy: 94,
        processingTime: "2.8s",
        falsePositives: "3.5%",
        coverage: "500K videos",
      },
    },
    {
      id: "corporate",
      title: "Corporate Impersonation",
      category: "Business",
      year: "2024",
      impact: "High",
      description: "Preventing CEO deepfake fraud in corporate communications",
      challenge: "Sophisticated deepfakes of executives used in business email compromise attacks.",
      solution: "Enterprise-grade detection system with behavioral analysis and voice verification.",
      outcome: "Protected Fortune 500 companies from deepfake-enabled social engineering attacks.",
      techniques: ["Behavioral Analysis", "Voice Biometrics", "Contextual AI"],
      metrics: {
        accuracy: 98,
        processingTime: "0.8s",
        falsePositives: "1.2%",
        coverage: "1000+ companies",
      },
    },
    {
      id: "journalism",
      title: "News Media Verification",
      category: "Media",
      year: "2023",
      impact: "Medium",
      description: "Automated fact-checking for news organizations",
      challenge: "News outlets needed rapid verification of user-submitted video content.",
      solution: "Integrated detection API for newsroom workflows with human-in-the-loop verification.",
      outcome: "Enabled faster fact-checking and reduced publication of manipulated content.",
      techniques: ["Compression Analysis", "Metadata Verification", "Source Tracking"],
      metrics: {
        accuracy: 92,
        processingTime: "3.1s",
        falsePositives: "4.8%",
        coverage: "200+ newsrooms",
      },
    },
  ]

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case "High":
        return "bg-red-100 text-red-800 border-red-200"
      case "Medium":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "Low":
        return "bg-green-100 text-green-800 border-green-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  return (
    <div className="space-y-6">
      {/* Overview */}
      <Card className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 border-indigo-200 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 text-indigo-700">
            <Globe className="w-5 h-5" />
            <span>Real-World Case Studies</span>
          </CardTitle>
          <CardDescription className="text-slate-600">
            Explore how AI detection systems have been deployed to combat deepfakes in various industries
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg text-white shadow-lg">
              <div className="text-2xl font-bold">50M+</div>
              <div className="text-sm text-blue-100">Videos Analyzed</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg text-white shadow-lg">
              <div className="text-2xl font-bold">95.2%</div>
              <div className="text-sm text-emerald-100">Average Accuracy</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-purple-500 to-violet-500 rounded-lg text-white shadow-lg">
              <div className="text-2xl font-bold">$200M+</div>
              <div className="text-sm text-purple-100">Fraud Prevented</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg text-white shadow-lg">
              <div className="text-2xl font-bold">1000+</div>
              <div className="text-sm text-orange-100">Organizations Protected</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Case Studies */}
      <Tabs defaultValue="political" className="space-y-4">
        <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
          {caseStudies.map((study) => (
            <TabsTrigger key={study.id} value={study.id} className="text-xs">
              {study.category}
            </TabsTrigger>
          ))}
        </TabsList>

        {caseStudies.map((study) => (
          <TabsContent key={study.id} value={study.id}>
            <Card className="bg-gradient-to-br from-white to-slate-50 border-slate-200 shadow-lg">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl text-slate-800">{study.title}</CardTitle>
                    <CardDescription className="mt-1 text-slate-600">{study.description}</CardDescription>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge
                      variant="outline"
                      className="flex items-center space-x-1 bg-indigo-50 text-indigo-700 border-indigo-200"
                    >
                      <Calendar className="w-3 h-3" />
                      <span>{study.year}</span>
                    </Badge>
                    <Badge className={`${getImpactColor(study.impact)} border-0`}>{study.impact} Impact</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Challenge, Solution, Outcome */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Alert className="border-red-300 bg-gradient-to-br from-red-50 to-orange-50">
                    <AlertTriangle className="h-4 w-4 text-red-600" />
                    <AlertTitle className="text-red-800">Challenge</AlertTitle>
                    <AlertDescription className="text-sm mt-2 text-red-700">{study.challenge}</AlertDescription>
                  </Alert>

                  <Alert className="border-blue-300 bg-gradient-to-br from-blue-50 to-cyan-50">
                    <Shield className="h-4 w-4 text-blue-600" />
                    <AlertTitle className="text-blue-800">Solution</AlertTitle>
                    <AlertDescription className="text-sm mt-2 text-blue-700">{study.solution}</AlertDescription>
                  </Alert>

                  <Alert className="border-emerald-300 bg-gradient-to-br from-emerald-50 to-teal-50">
                    <CheckCircle className="h-4 w-4 text-emerald-600" />
                    <AlertTitle className="text-emerald-800">Outcome</AlertTitle>
                    <AlertDescription className="text-sm mt-2 text-emerald-700">{study.outcome}</AlertDescription>
                  </Alert>
                </div>

                {/* Metrics */}
                <div>
                  <h4 className="font-semibold mb-3 flex items-center space-x-2 text-slate-700">
                    <TrendingUp className="w-4 h-4" />
                    <span>Performance Metrics</span>
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-3 rounded-lg text-center text-white shadow-lg">
                      <div className="text-lg font-bold">{study.metrics.accuracy}%</div>
                      <div className="text-xs text-blue-100">Accuracy</div>
                    </div>
                    <div className="bg-gradient-to-br from-emerald-500 to-teal-500 p-3 rounded-lg text-center text-white shadow-lg">
                      <div className="text-lg font-bold">{study.metrics.processingTime}</div>
                      <div className="text-xs text-emerald-100">Processing Time</div>
                    </div>
                    <div className="bg-gradient-to-br from-orange-500 to-red-500 p-3 rounded-lg text-center text-white shadow-lg">
                      <div className="text-lg font-bold">{study.metrics.falsePositives}</div>
                      <div className="text-xs text-orange-100">False Positives</div>
                    </div>
                    <div className="bg-gradient-to-br from-purple-500 to-violet-500 p-3 rounded-lg text-center text-white shadow-lg">
                      <div className="text-lg font-bold">{study.metrics.coverage}</div>
                      <div className="text-xs text-purple-100">Coverage</div>
                    </div>
                  </div>
                </div>

                {/* Techniques Used */}
                <div>
                  <h4 className="font-semibold mb-3 text-slate-700">Detection Techniques Applied</h4>
                  <div className="flex flex-wrap gap-2">
                    {study.techniques.map((technique, index) => (
                      <Badge key={index} className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white border-0">
                        {technique}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>

      {/* Industry Impact */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Users className="w-5 h-5" />
            <span>Industry Impact Analysis</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3">Most Targeted Sectors</h4>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Politics & Government</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-24 bg-gray-200 rounded-full h-2">
                      <div className="bg-red-500 h-2 rounded-full" style={{ width: "85%" }}></div>
                    </div>
                    <span className="text-xs font-mono">85%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Entertainment</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-24 bg-gray-200 rounded-full h-2">
                      <div className="bg-orange-500 h-2 rounded-full" style={{ width: "72%" }}></div>
                    </div>
                    <span className="text-xs font-mono">72%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Financial Services</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-24 bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: "68%" }}></div>
                    </div>
                    <span className="text-xs font-mono">68%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">News & Media</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-24 bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: "45%" }}></div>
                    </div>
                    <span className="text-xs font-mono">45%</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Detection Success Rates</h4>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Corporate Communications</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-24 bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: "98%" }}></div>
                    </div>
                    <span className="text-xs font-mono">98%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Political Content</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-24 bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: "96%" }}></div>
                    </div>
                    <span className="text-xs font-mono">96%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Celebrity Content</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-24 bg-gray-200 rounded-full h-2">
                      <div className="bg-purple-500 h-2 rounded-full" style={{ width: "94%" }}></div>
                    </div>
                    <span className="text-xs font-mono">94%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">News Verification</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-24 bg-gray-200 rounded-full h-2">
                      <div className="bg-orange-500 h-2 rounded-full" style={{ width: "92%" }}></div>
                    </div>
                    <span className="text-xs font-mono">92%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
