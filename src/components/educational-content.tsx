import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Brain, Eye, Shield, Zap, AlertTriangle, Info, Target, Cpu } from "lucide-react"

export function EducationalContent() {
  return (
    <div className="space-y-6">
      {/* Introduction */}
      <Card className="bg-gradient-to-br from-indigo-50 to-purple-50 border-indigo-200 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 text-indigo-700">
            <Brain className="w-5 h-5" />
            <span>Understanding the AI Arms Race</span>
          </CardTitle>
          <CardDescription className="text-slate-600">
            The ongoing battle between AI systems that create deepfakes and those that detect them
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-slate-600">
            Deepfake technology represents one of the most fascinating examples of an AI arms race. As generative AI
            becomes more sophisticated at creating realistic fake content, detection AI must evolve to keep pace. This
            creates a continuous cycle of improvement on both sides.
          </p>

          <Alert className="border-cyan-200 bg-cyan-50">
            <Info className="h-4 w-4 text-cyan-600" />
            <AlertTitle className="text-cyan-800">Key Insight</AlertTitle>
            <AlertDescription className="text-cyan-700">
              Modern deepfake detection relies on ensemble methods, using multiple AI models to analyze different
              aspects of media content simultaneously.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* How Deepfakes Work */}
      <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 text-purple-700">
            <Cpu className="w-5 h-5" />
            <span>How Deepfakes Are Created</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="font-semibold flex items-center space-x-2">
                <Badge className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white">1</Badge>
                <span className="text-slate-700">Data Collection</span>
              </h4>
              <p className="text-sm text-slate-600">
                Thousands of images or videos of the target person are collected to train the AI model on their facial
                features and expressions.
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold flex items-center space-x-2">
                <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">2</Badge>
                <span className="text-slate-700">Neural Network Training</span>
              </h4>
              <p className="text-sm text-slate-600">
                Generative Adversarial Networks (GANs) learn to create realistic facial mappings and expressions that
                match the target person.
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold flex items-center space-x-2">
                <Badge className="bg-gradient-to-r from-pink-500 to-rose-500 text-white">3</Badge>
                <span className="text-slate-700">Face Swapping</span>
              </h4>
              <p className="text-sm text-slate-600">
                The trained model replaces faces in source videos with the generated target face, maintaining lighting
                and movement.
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold flex items-center space-x-2">
                <Badge className="bg-gradient-to-r from-rose-500 to-orange-500 text-white">4</Badge>
                <span className="text-slate-700">Post-Processing</span>
              </h4>
              <p className="text-sm text-slate-600">
                Additional AI models smooth transitions, adjust lighting, and enhance realism to create the final
                deepfake video.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Detection Methods */}
      <Card className="bg-gradient-to-br from-emerald-50 to-teal-50 border-emerald-200 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 text-emerald-700">
            <Eye className="w-5 h-5" />
            <span>How AI Detects Deepfakes</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            <div className="border-l-4 border-blue-400 pl-4 bg-blue-50/50 py-2 rounded-r-lg">
              <h4 className="font-semibold text-blue-700">Facial Landmark Analysis</h4>
              <p className="text-sm text-blue-600 mt-1">
                AI models analyze the consistency of facial landmarks and proportions across frames to detect unnatural
                movements or distortions.
              </p>
            </div>

            <div className="border-l-4 border-emerald-400 pl-4 bg-emerald-50/50 py-2 rounded-r-lg">
              <h4 className="font-semibold text-emerald-700">Temporal Coherence</h4>
              <p className="text-sm text-emerald-600 mt-1">
                Detection systems examine how facial features change over time, looking for inconsistencies that human
                eyes might miss.
              </p>
            </div>

            <div className="border-l-4 border-purple-400 pl-4 bg-purple-50/50 py-2 rounded-r-lg">
              <h4 className="font-semibold text-purple-700">Compression Artifacts</h4>
              <p className="text-sm text-purple-600 mt-1">
                AI can detect subtle compression patterns and artifacts that are often introduced during the deepfake
                generation process.
              </p>
            </div>

            <div className="border-l-4 border-orange-400 pl-4 bg-orange-50/50 py-2 rounded-r-lg">
              <h4 className="font-semibold text-orange-700">Biometric Inconsistencies</h4>
              <p className="text-sm text-orange-600 mt-1">
                Advanced models analyze unique biometric features like pulse detection, eye movement patterns, and
                micro-expressions.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Challenges and Limitations */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <AlertTriangle className="w-5 h-5" />
            <span>Challenges in Detection</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Alert>
              <AlertTriangle className="h-4 w-4" />
              <AlertTitle>Evolving Technology</AlertTitle>
              <AlertDescription className="text-sm">
                As deepfake generation improves, detection models must constantly adapt to new techniques and higher
                quality fakes.
              </AlertDescription>
            </Alert>

            <Alert>
              <Target className="h-4 w-4" />
              <AlertTitle>Adversarial Attacks</AlertTitle>
              <AlertDescription className="text-sm">
                Deepfake creators can specifically target detection systems, creating content designed to fool AI
                detectors.
              </AlertDescription>
            </Alert>

            <Alert>
              <Zap className="h-4 w-4" />
              <AlertTitle>Real-time Processing</AlertTitle>
              <AlertDescription className="text-sm">
                Detecting deepfakes in real-time requires significant computational resources and optimized algorithms.
              </AlertDescription>
            </Alert>

            <Alert>
              <Shield className="h-4 w-4" />
              <AlertTitle>False Positives</AlertTitle>
              <AlertDescription className="text-sm">
                Balancing sensitivity with accuracy to avoid flagging legitimate content as deepfakes remains
                challenging.
              </AlertDescription>
            </Alert>
          </div>
        </CardContent>
      </Card>

      {/* Future Directions */}
      <Card>
        <CardHeader>
          <CardTitle>The Future of AI vs AI</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            The future of deepfake detection lies in several emerging technologies and approaches:
          </p>

          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <Badge variant="secondary" className="mt-1">
                Blockchain
              </Badge>
              <div>
                <h5 className="font-medium">Content Authentication</h5>
                <p className="text-sm text-muted-foreground">
                  Cryptographic signatures and blockchain technology to verify content authenticity at creation.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Badge variant="secondary" className="mt-1">
                Federated
              </Badge>
              <div>
                <h5 className="font-medium">Collaborative Detection</h5>
                <p className="text-sm text-muted-foreground">
                  Networks of AI systems sharing detection insights while preserving privacy.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Badge variant="secondary" className="mt-1">
                Multimodal
              </Badge>
              <div>
                <h5 className="font-medium">Cross-Modal Analysis</h5>
                <p className="text-sm text-muted-foreground">
                  Analyzing audio, video, and metadata simultaneously for more robust detection.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
