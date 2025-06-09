"use client"

import { useState, useEffect, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { AuthForm } from "@/components/auth-form"

function AuthContent() {
  const searchParams = useSearchParams()
  const [mode, setMode] = useState<"signin" | "signup">("signin")

  useEffect(() => {
    const modeParam = searchParams.get("mode")
    if (modeParam === "signup") {
      setMode("signup")
    }
  }, [searchParams])

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-100 via-sky-50 to-emerald-50 flex items-center justify-center p-4">
      <AuthForm mode={mode} onModeChange={setMode} />
    </div>
  )
}

export default function AuthPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AuthContent />
    </Suspense>
  )
}
