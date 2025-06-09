"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Shield, Mail, Lock, User, Eye, EyeOff, ArrowLeft, Github, Chrome, Sparkles, CheckCircle } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

interface AuthFormProps {
  mode: "signin" | "signup"
  onModeChange: (mode: "signin" | "signup") => void
}

export function AuthForm({ mode, onModeChange }: AuthFormProps) {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  })
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Redirect to detector page after successful auth
    router.push("/detector")
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const benefits = [
    "98.7% detection accuracy",
    "Real-time analysis in <2s",
    "Enterprise-grade security",
    "24/7 customer support",
    "API access included",
    "Advanced analytics dashboard",
  ]

  return (
    <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      {/* Left Side - Benefits */}
      <div className="hidden lg:block space-y-8">
        <div>
          <Link
            href="/"
            className="inline-flex items-center space-x-2 text-violet-600 hover:text-violet-700 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>

          <div className="flex items-center space-x-3 mb-6">
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-violet-500 via-purple-500 to-pink-500 rounded-xl shadow-lg">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              AI vs AI
            </span>
          </div>

          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
            {mode === "signin" ? "Welcome Back!" : "Join the Future"}
          </h1>
          <p className="text-xl text-slate-600 mb-8">
            {mode === "signin"
              ? "Continue protecting your content with AI-powered deepfake detection."
              : "Start detecting deepfakes with the most advanced AI technology available."}
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-slate-800 flex items-center">
            <Sparkles className="w-5 h-5 mr-2 text-violet-500" />
            What you get:
          </h3>
          <div className="grid grid-cols-1 gap-3">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <span className="text-slate-600">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-violet-500/10 to-purple-500/10 rounded-2xl p-6 border border-violet-200">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-violet-500 to-purple-500 flex items-center justify-center text-white font-semibold">
              SC
            </div>
            <div>
              <div className="font-semibold text-slate-800">Sarah Chen</div>
              <div className="text-sm text-slate-600">Security Director, TechCorp</div>
            </div>
          </div>
          <p className="text-slate-600 italic">
            "This platform saved us from a sophisticated deepfake attack. The detection was instant and accurate."
          </p>
        </div>
      </div>

      {/* Right Side - Form */}
      <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-2xl">
        <CardHeader className="text-center pb-6">
          <div className="lg:hidden flex items-center justify-center space-x-3 mb-4">
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-violet-500 to-purple-500 rounded-xl">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
              AI vs AI
            </span>
          </div>

          <CardTitle className="text-2xl font-bold text-slate-800">
            {mode === "signin" ? "Sign In" : "Create Account"}
          </CardTitle>
          <CardDescription className="text-slate-600">
            {mode === "signin"
              ? "Enter your credentials to access your account"
              : "Join thousands of users protecting their content"}
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Social Login */}
          <div className="space-y-3">
            <Button variant="outline" className="w-full border-slate-200 hover:bg-slate-50 py-6" type="button">
              <Chrome className="w-5 h-5 mr-3" />
              Continue with Google
            </Button>
            <Button variant="outline" className="w-full border-slate-200 hover:bg-slate-50 py-6" type="button">
              <Github className="w-5 h-5 mr-3" />
              Continue with GitHub
            </Button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-slate-200" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-slate-500">Or continue with email</span>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {mode === "signup" && (
              <div className="space-y-2">
                <Label htmlFor="name" className="text-slate-700">
                  Full Name
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="pl-10 py-6 border-slate-200 focus:border-violet-500 focus:ring-violet-500"
                    required
                  />
                </div>
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="email" className="text-slate-700">
                Email Address
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="pl-10 py-6 border-slate-200 focus:border-violet-500 focus:ring-violet-500"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-slate-700">
                Password
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={(e) => handleInputChange("password", e.target.value)}
                  className="pl-10 pr-10 py-6 border-slate-200 focus:border-violet-500 focus:ring-violet-500"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {mode === "signup" && (
              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="text-slate-700">
                  Confirm Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                  <Input
                    id="confirmPassword"
                    type={showPassword ? "text" : "password"}
                    placeholder="Confirm your password"
                    value={formData.confirmPassword}
                    onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                    className="pl-10 py-6 border-slate-200 focus:border-violet-500 focus:ring-violet-500"
                    required
                  />
                </div>
              </div>
            )}

            {mode === "signin" && (
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox id="remember" />
                  <Label htmlFor="remember" className="text-sm text-slate-600">
                    Remember me
                  </Label>
                </div>
                <a href="#" className="text-sm text-violet-600 hover:text-violet-700">
                  Forgot password?
                </a>
              </div>
            )}

            {mode === "signup" && (
              <div className="flex items-start space-x-2">
                <Checkbox
                  id="terms"
                  checked={formData.agreeToTerms}
                  onCheckedChange={(checked) => handleInputChange("agreeToTerms", checked as boolean)}
                />
                <Label htmlFor="terms" className="text-sm text-slate-600 leading-relaxed">
                  I agree to the{" "}
                  <a href="#" className="text-violet-600 hover:text-violet-700">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-violet-600 hover:text-violet-700">
                    Privacy Policy
                  </a>
                </Label>
              </div>
            )}

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-violet-500 to-purple-500 hover:from-violet-600 hover:to-purple-600 text-white border-0 shadow-lg py-6 text-lg"
              disabled={isLoading || (mode === "signup" && !formData.agreeToTerms)}
            >
              {isLoading ? (
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>{mode === "signin" ? "Signing In..." : "Creating Account..."}</span>
                </div>
              ) : mode === "signin" ? (
                "Sign In"
              ) : (
                "Create Account"
              )}
            </Button>
          </form>

          <div className="text-center">
            <span className="text-slate-600">
              {mode === "signin" ? "Don't have an account?" : "Already have an account?"}
            </span>{" "}
            <button
              onClick={() => onModeChange(mode === "signin" ? "signup" : "signin")}
              className="text-violet-600 hover:text-violet-700 font-medium"
            >
              {mode === "signin" ? "Sign up" : "Sign in"}
            </button>
          </div>

          {mode === "signup" && (
            <Alert className="border-emerald-200 bg-emerald-50">
              <CheckCircle className="h-4 w-4 text-emerald-600" />
              <AlertDescription className="text-emerald-700">
                Start with a 14-day free trial. No credit card required.
              </AlertDescription>
            </Alert>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
