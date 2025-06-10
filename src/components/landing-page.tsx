"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Brain, Zap, Star, ArrowRight, Play, Sparkles, Globe } from "lucide-react"
import Link from "next/link"

export function LandingPage() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Detection",
      description: "Advanced neural networks analyze content with 98.7% accuracy",
      color: "from-purple-400 to-pink-400",
    },
    {
      icon: Zap,
      title: "Real-Time Analysis",
      description: "Get results in under 2 seconds with our optimized algorithms",
      color: "from-blue-400 to-cyan-400",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade security protecting your sensitive content",
      color: "from-emerald-400 to-teal-400",
    },
    {
      icon: Globe,
      title: "Global Scale",
      description: "Trusted by 1000+ organizations worldwide",
      color: "from-orange-400 to-red-400",
    },
  ]

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Security Director",
      company: "TechCorp",
      content: "This platform saved us from a sophisticated deepfake attack. The detection was instant and accurate.",
      avatar: "SC",
    },
    {
      name: "Michael Rodriguez",
      role: "News Editor",
      company: "Global News",
      content: "Essential tool for our newsroom. We can verify content authenticity in seconds.",
      avatar: "MR",
    },
    {
      name: "Dr. Emily Watson",
      role: "AI Researcher",
      company: "University Lab",
      content: "The most advanced deepfake detection system I've encountered. Impressive accuracy rates.",
      avatar: "EW",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-100 via-sky-50 to-emerald-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-violet-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-violet-500 via-purple-500 to-pink-500 rounded-xl shadow-lg">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                AI vs AI
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-slate-600 hover:text-violet-600 transition-colors">
                Features
              </a>
              <a href="#how-it-works" className="text-slate-600 hover:text-violet-600 transition-colors">
                How it Works
              </a>
              <a href="#testimonials" className="text-slate-600 hover:text-violet-600 transition-colors">
                Testimonials
              </a>
              <a href="#pricing" className="text-slate-600 hover:text-violet-600 transition-colors">
                Pricing
              </a>
            </div>

            <div className="flex items-center space-x-3">
              <Link href="/auth">
                <Button variant="outline" className="border-violet-200 text-violet-600 hover:bg-violet-50">
                  Sign In
                </Button>
              </Link>
              <Link href="/auth?mode=signup">
                <Button className="bg-gradient-to-r from-violet-500 to-purple-500 hover:from-violet-600 hover:to-purple-600 text-white border-0 shadow-lg">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-gradient-to-r from-violet-100 to-purple-100 text-violet-700 border-violet-200">
              <Sparkles className="w-3 h-3 mr-1" />
              Trusted by 1000+ Organizations
            </Badge>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight">
              Detect Deepfakes with
              <span className="block">AI Precision</span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Protect your organization from AI-generated content with our advanced detection system. Real-time
              analysis, enterprise security, and 98.7% accuracy.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Link href="/auth?mode=signup">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-violet-500 to-purple-500 hover:from-violet-600 hover:to-purple-600 text-white border-0 shadow-xl px-8 py-6 text-lg"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>

              <Button
                size="lg"
                variant="outline"
                className="border-violet-200 text-violet-600 hover:bg-violet-50 px-8 py-6 text-lg"
                onClick={() => setIsVideoPlaying(true)}
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                  98.7%
                </div>
                <div className="text-slate-600">Detection Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  {"<2s"}
                </div>
                <div className="text-slate-600">Analysis Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  50M+
                </div>
                <div className="text-slate-600">Content Analyzed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-gradient-to-br from-white/50 to-violet-50/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
              Powerful Features
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Advanced AI technology meets intuitive design for the ultimate deepfake detection experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <Card
                  key={index}
                  className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  <CardContent className="p-6 text-center">
                    <div
                      className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center shadow-lg`}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-slate-800">{feature.title}</h3>
                    <p className="text-slate-600">{feature.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
              How It Works
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Simple, fast, and accurate deepfake detection in three easy steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-violet-500 to-purple-500 flex items-center justify-center text-white text-2xl font-bold shadow-xl">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-800">Upload Content</h3>
              <p className="text-slate-600">Upload your image or video file through our secure interface</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-white text-2xl font-bold shadow-xl">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-800">AI Analysis</h3>
              <p className="text-slate-600">Our neural networks analyze the content for deepfake indicators</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center text-white text-2xl font-bold shadow-xl">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-800">Get Results</h3>
              <p className="text-slate-600">Receive detailed analysis results with confidence scores</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-4 bg-gradient-to-br from-violet-50/50 to-purple-50/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
              Trusted by Experts
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              See what industry leaders say about our deepfake detection platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-600 mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-violet-500 to-purple-500 flex items-center justify-center text-white font-semibold mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-slate-800">{testimonial.name}</div>
                      <div className="text-sm text-slate-600">
                        {testimonial.role}, {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Ready to Protect Your Content?</h2>
          <p className="text-xl text-violet-100 mb-8 max-w-2xl mx-auto">
            Join thousands of organizations using AI vs AI to detect deepfakes and protect their digital assets.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/auth?mode=signup">
              <Button size="lg" className="bg-white text-violet-600 hover:bg-violet-50 px-8 py-6 text-lg shadow-xl">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="/detector">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-black hover:bg-white/10 px-8 py-6 text-lg"
              >
                Try Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-slate-900">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-violet-500 to-purple-500 rounded-lg">
                  <Shield className="w-4 h-4 text-white" />
                </div>
                <span className="text-lg font-bold text-white">AI vs AI</span>
              </div>
              <p className="text-slate-400">Advanced deepfake detection powered by artificial intelligence.</p>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Product</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    API
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Documentation
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Security
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Compliance
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 AI vs AI. All rights reserved. Built for educational purposes.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
