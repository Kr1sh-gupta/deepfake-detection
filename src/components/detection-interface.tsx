"use client"

import type React from "react"

import { useState, useRef, useCallback } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Upload, Camera, FileImage, Video, AlertTriangle, CheckCircle, XCircle, Loader2 } from "lucide-react"

interface DetectionResult {
  confidence: number
  isDeepfake: boolean
  techniques: string[]
  details: {
    faceConsistency: number
    temporalCoherence: number
    artifactDetection: number
    biometricAnalysis: number
  }
}

export function DetectionInterface() {
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [result, setResult] = useState<DetectionResult | null>(null)
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)
  const [dragActive, setDragActive] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const simulateAnalysis = useCallback(async (): Promise<DetectionResult> => {
    // Simulate AI analysis with random but realistic results
    await new Promise((resolve) => setTimeout(resolve, 2000 + Math.random() * 1000))

    const isDeepfake = Math.random() > 0.6
    const baseConfidence = isDeepfake ? 0.7 + Math.random() * 0.25 : 0.1 + Math.random() * 0.3

    return {
      confidence: Math.min(0.99, baseConfidence),
      isDeepfake,
      techniques: isDeepfake
        ? ["Neural texture analysis", "Temporal inconsistency detection", "Biometric verification"]
        : ["Face landmark analysis", "Compression artifact detection", "Lighting consistency check"],
      details: {
        faceConsistency: 0.2 + Math.random() * 0.8,
        temporalCoherence: 0.3 + Math.random() * 0.7,
        artifactDetection: 0.1 + Math.random() * 0.9,
        biometricAnalysis: 0.4 + Math.random() * 0.6,
      },
    }
  }, [])

  const handleFileUpload = useCallback(
    async (file: File) => {
      setUploadedFile(file)
      setIsAnalyzing(true)
      setResult(null)

      try {
        const analysisResult = await simulateAnalysis()
        setResult(analysisResult)
      } catch (error) {
        console.error("Analysis failed:", error)
      } finally {
        setIsAnalyzing(false)
      }
    },
    [simulateAnalysis],
  )

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }, [])

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault()
      e.stopPropagation()
      setDragActive(false)

      const files = e.dataTransfer.files
      if (files && files[0]) {
        handleFileUpload(files[0])
      }
    },
    [handleFileUpload],
  )

  const handleFileSelect = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = e.target.files
      if (files && files[0]) {
        handleFileUpload(files[0])
      }
    },
    [handleFileUpload],
  )

  return (
    <div className="space-y-6">
      {/* Upload Interface */}
      <Card className="bg-gradient-to-br from-white to-indigo-50 border-indigo-200 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 text-indigo-700">
            <Upload className="w-5 h-5" />
            <span>Upload Media for Analysis</span>
          </CardTitle>
          <CardDescription className="text-slate-600">
            Upload an image or video to analyze for deepfake content. Supported formats: JPG, PNG, MP4, MOV
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div
            className={`border-2 border-dashed rounded-lg p-8 text-center transition-all duration-300 ${
              dragActive
                ? "border-indigo-500 bg-gradient-to-br from-indigo-50 to-purple-50 shadow-inner"
                : "border-indigo-300 hover:border-indigo-400 hover:bg-gradient-to-br hover:from-indigo-25 hover:to-purple-25"
            }`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*,video/*"
              onChange={handleFileSelect}
              className="hidden"
            />

            <div className="space-y-4">
              <div className="flex justify-center space-x-4">
                <FileImage className="w-12 h-12 text-indigo-400" />
                <Video className="w-12 h-12 text-purple-400" />
              </div>

              <div>
                <p className="text-lg font-medium text-slate-700">Drop files here or click to upload</p>
                <p className="text-sm text-slate-500 mt-1">Maximum file size: 50MB</p>
              </div>

              <Button
                onClick={() => fileInputRef.current?.click()}
                className="mt-4 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white border-0 shadow-lg"
              >
                <Upload className="w-4 h-4 mr-2" />
                Choose File
              </Button>
            </div>
          </div>

          {uploadedFile && (
            <div className="mt-4 p-4 bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-emerald-800">{uploadedFile.name}</p>
                  <p className="text-sm text-emerald-600">{(uploadedFile.size / 1024 / 1024).toFixed(2)} MB</p>
                </div>
                <Badge className="bg-emerald-500 text-white">Ready for analysis</Badge>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Analysis Progress */}
      {isAnalyzing && (
        <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200 shadow-lg">
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Loader2 className="w-5 h-5 animate-spin text-blue-500" />
                <span className="font-medium text-blue-800">Analyzing content...</span>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm text-blue-700">
                  <span>Processing neural networks</span>
                  <span>Running...</span>
                </div>
                <Progress value={65} className="h-3 bg-blue-100" />
              </div>

              <div className="text-sm text-blue-600 bg-blue-100/50 p-3 rounded-lg">
                Our AI models are analyzing facial features, temporal consistency, and compression artifacts to detect
                potential deepfake content.
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Results */}
      {result && !isAnalyzing && (
        <Card
          className={`shadow-lg ${result.isDeepfake ? "bg-gradient-to-br from-red-50 to-orange-50 border-red-200" : "bg-gradient-to-br from-emerald-50 to-teal-50 border-emerald-200"}`}
        >
          <CardHeader>
            <CardTitle
              className={`flex items-center space-x-2 ${result.isDeepfake ? "text-red-700" : "text-emerald-700"}`}
            >
              {result.isDeepfake ? (
                <XCircle className="w-5 h-5 text-red-500" />
              ) : (
                <CheckCircle className="w-5 h-5 text-emerald-500" />
              )}
              <span>Analysis Results</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Main Result */}
            <Alert
              className={result.isDeepfake ? "border-red-300 bg-red-100/50" : "border-emerald-300 bg-emerald-100/50"}
            >
              <AlertTriangle className="h-4 w-4" />
              <AlertTitle className={result.isDeepfake ? "text-red-800" : "text-emerald-800"}>
                {result.isDeepfake ? "Potential Deepfake Detected" : "Content Appears Authentic"}
              </AlertTitle>
              <AlertDescription className={result.isDeepfake ? "text-red-700" : "text-emerald-700"}>
                Confidence: {(result.confidence * 100).toFixed(1)}% •
                {result.isDeepfake
                  ? " This content shows signs of AI manipulation"
                  : " No significant signs of AI manipulation detected"}
              </AlertDescription>
            </Alert>

            {/* Confidence Score */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium text-slate-700">Detection Confidence</span>
                <span className="text-sm font-mono text-slate-600">{(result.confidence * 100).toFixed(1)}%</span>
              </div>
              <Progress
                value={result.confidence * 100}
                className={`h-3 ${result.isDeepfake ? "bg-red-100" : "bg-emerald-100"}`}
              />
            </div>

            {/* Detailed Analysis */}
            <div>
              <h4 className="font-medium mb-3">Detailed Analysis</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Face Consistency</span>
                    <span className="text-sm font-mono">{(result.details.faceConsistency * 100).toFixed(0)}%</span>
                  </div>
                  <Progress value={result.details.faceConsistency * 100} className="h-2" />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Temporal Coherence</span>
                    <span className="text-sm font-mono">{(result.details.temporalCoherence * 100).toFixed(0)}%</span>
                  </div>
                  <Progress value={result.details.temporalCoherence * 100} className="h-2" />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Artifact Detection</span>
                    <span className="text-sm font-mono">{(result.details.artifactDetection * 100).toFixed(0)}%</span>
                  </div>
                  <Progress value={result.details.artifactDetection * 100} className="h-2" />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Biometric Analysis</span>
                    <span className="text-sm font-mono">{(result.details.biometricAnalysis * 100).toFixed(0)}%</span>
                  </div>
                  <Progress value={result.details.biometricAnalysis * 100} className="h-2" />
                </div>
              </div>
            </div>

            {/* Techniques Used */}
            <div>
              <h4 className="font-medium mb-3">Detection Techniques Applied</h4>
              <div className="flex flex-wrap gap-2">
                {result.techniques.map((technique, index) => (
                  <Badge key={index} variant="outline">
                    {technique}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200 shadow-lg hover:shadow-xl transition-shadow">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <Camera className="w-8 h-8 text-blue-500" />
              <div>
                <h4 className="font-medium text-blue-800">Real-time Analysis</h4>
                <p className="text-sm text-blue-600">Analyze live camera feed</p>
              </div>
            </div>
            <Button className="w-full mt-3 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white border-0">
              Start Camera Analysis
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-emerald-50 to-teal-50 border-emerald-200 shadow-lg hover:shadow-xl transition-shadow">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <Upload className="w-8 h-8 text-emerald-500" />
              <div>
                <h4 className="font-medium text-emerald-800">Batch Processing</h4>
                <p className="text-sm text-emerald-600">Analyze multiple files</p>
              </div>
            </div>
            <Button className="w-full mt-3 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white border-0">
              Upload Multiple Files
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
