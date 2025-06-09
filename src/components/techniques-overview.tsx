import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Brain, Eye, Zap, Target, Cpu, Network, Shield } from "lucide-react"

export function TechniquesOverview() {
  const techniques = [
    {
      id: "cnn",
      name: "Convolutional Neural Networks",
      icon: Brain,
      accuracy: 85,
      speed: "Fast",
      description: "Deep learning models that analyze spatial features in images",
      strengths: ["Good at detecting visual artifacts", "Fast processing", "Well-established"],
      weaknesses: ["Can be fooled by high-quality deepfakes", "Limited temporal analysis"],
      details:
        "CNNs examine pixel-level patterns and textures that are often inconsistent in deepfakes. They look for telltale signs like unnatural skin textures, inconsistent lighting, and facial boundary artifacts.",
    },
    {
      id: "rnn",
      name: "Recurrent Neural Networks",
      icon: Network,
      accuracy: 78,
      speed: "Medium",
      description: "Models that analyze temporal sequences and frame-to-frame consistency",
      strengths: ["Excellent temporal analysis", "Detects motion inconsistencies", "Good for video"],
      weaknesses: ["Slower processing", "Requires longer sequences", "Memory intensive"],
      details:
        "RNNs and LSTMs analyze how facial features change over time, detecting unnatural movements, inconsistent expressions, and temporal artifacts that are common in deepfake videos.",
    },
    {
      id: "ensemble",
      name: "Ensemble Methods",
      icon: Shield,
      accuracy: 94,
      speed: "Medium",
      description: "Combination of multiple AI models for robust detection",
      strengths: ["Highest accuracy", "Robust against attacks", "Multiple perspectives"],
      weaknesses: ["Resource intensive", "Complex deployment", "Slower inference"],
      details:
        "Ensemble methods combine predictions from multiple specialized models, each focusing on different aspects like facial landmarks, compression artifacts, and temporal consistency.",
    },
    {
      id: "transformer",
      name: "Vision Transformers",
      icon: Eye,
      accuracy: 91,
      speed: "Fast",
      description: "Attention-based models that focus on relevant image regions",
      strengths: ["Attention mechanisms", "Global context", "State-of-the-art performance"],
      weaknesses: ["Requires large datasets", "Computationally expensive", "Black box"],
      details:
        "Vision Transformers use self-attention to focus on the most relevant parts of an image, learning complex relationships between facial features and detecting subtle inconsistencies.",
    },
    {
      id: "capsule",
      name: "Capsule Networks",
      icon: Target,
      accuracy: 88,
      speed: "Slow",
      description: "Networks that preserve spatial relationships between features",
      strengths: ["Preserves spatial hierarchy", "Robust to viewpoint changes", "Interpretable"],
      weaknesses: ["Slow training", "Limited scalability", "Complex architecture"],
      details:
        "Capsule networks maintain spatial relationships between facial features, making them particularly good at detecting geometric inconsistencies in deepfake faces.",
    },
    {
      id: "adversarial",
      name: "Adversarial Training",
      icon: Zap,
      accuracy: 89,
      speed: "Medium",
      description: "Models trained to be robust against adversarial attacks",
      strengths: ["Robust against attacks", "Generalizes well", "Adaptive learning"],
      weaknesses: ["Complex training", "Unstable convergence", "Resource intensive"],
      details:
        "These models are specifically trained to resist adversarial examples and attacks, making them more robust against sophisticated deepfake generation techniques.",
    },
  ]

  return (
    <div className="space-y-6">
      {/* Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Cpu className="w-5 h-5" />
            <span>Detection Techniques Overview</span>
          </CardTitle>
          <CardDescription>Explore the various AI techniques used to detect deepfake content</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Modern deepfake detection employs a variety of AI techniques, each with unique strengths and weaknesses. The
            most effective systems combine multiple approaches to achieve high accuracy and robustness against evolving
            deepfake technology.
          </p>
        </CardContent>
      </Card>

      {/* Techniques Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {techniques.map((technique, index) => {
          const IconComponent = technique.icon
          const gradients = [
            "from-blue-500 to-cyan-500",
            "from-emerald-500 to-teal-500",
            "from-purple-500 to-violet-500",
            "from-pink-500 to-rose-500",
            "from-orange-500 to-red-500",
            "from-indigo-500 to-purple-500",
          ]
          const bgGradients = [
            "from-blue-50 to-cyan-50 border-blue-200",
            "from-emerald-50 to-teal-50 border-emerald-200",
            "from-purple-50 to-violet-50 border-purple-200",
            "from-pink-50 to-rose-50 border-pink-200",
            "from-orange-50 to-red-50 border-orange-200",
            "from-indigo-50 to-purple-50 border-indigo-200",
          ]

          return (
            <Card
              key={technique.id}
              className={`bg-gradient-to-br ${bgGradients[index]} shadow-lg hover:shadow-xl transition-all duration-300`}
            >
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${gradients[index]} shadow-lg`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <Badge className={`bg-gradient-to-r ${gradients[index]} text-white border-0`}>
                    {technique.speed}
                  </Badge>
                </div>
                <CardTitle className="text-lg text-slate-700">{technique.name}</CardTitle>
                <CardDescription className="text-sm text-slate-600">{technique.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-slate-700">Accuracy</span>
                    <span className="text-sm font-mono text-slate-600">{technique.accuracy}%</span>
                  </div>
                  <Progress value={technique.accuracy} className={`h-2 bg-gradient-to-r ${gradients[index]}`} />
                </div>

                <div className="space-y-2">
                  <h5 className="text-sm font-medium text-emerald-700">Strengths</h5>
                  <ul className="text-xs space-y-1">
                    {technique.strengths.map((strength, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <div className="w-1 h-1 bg-emerald-500 rounded-full" />
                        <span className="text-slate-600">{strength}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2">
                  <h5 className="text-sm font-medium text-red-700">Limitations</h5>
                  <ul className="text-xs space-y-1">
                    {technique.weaknesses.map((weakness, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <div className="w-1 h-1 bg-red-500 rounded-full" />
                        <span className="text-slate-600">{weakness}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Detailed Analysis */}
      <Card>
        <CardHeader>
          <CardTitle>Detailed Technical Analysis</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="cnn" className="space-y-4">
            <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6">
              {techniques.map((technique) => (
                <TabsTrigger key={technique.id} value={technique.id} className="text-xs">
                  {technique.name.split(" ")[0]}
                </TabsTrigger>
              ))}
            </TabsList>

            {techniques.map((technique) => (
              <TabsContent key={technique.id} value={technique.id} className="space-y-4">
                <div className="flex items-center space-x-3">
                  <technique.icon className="w-8 h-8 text-blue-500" />
                  <div>
                    <h3 className="text-xl font-semibold">{technique.name}</h3>
                    <p className="text-muted-foreground">{technique.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-medium">Performance Metrics</h4>
                    <div className="space-y-1">
                      <div className="flex justify-between">
                        <span className="text-sm">Accuracy</span>
                        <span className="text-sm font-mono">{technique.accuracy}%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Speed</span>
                        <span className="text-sm">{technique.speed}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-medium text-green-700 dark:text-green-300">Key Strengths</h4>
                    <ul className="text-sm space-y-1">
                      {technique.strengths.map((strength, index) => (
                        <li key={index}>• {strength}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-medium text-red-700 dark:text-red-300">Limitations</h4>
                    <ul className="text-sm space-y-1">
                      {technique.weaknesses.map((weakness, index) => (
                        <li key={index}>• {weakness}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">How It Works</h4>
                  <p className="text-sm text-muted-foreground">{technique.details}</p>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
