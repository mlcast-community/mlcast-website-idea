import { Card } from "@/components/ui/card";
import { Code, Zap, Database, GitBranch, Users, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Code,
    title: "Simple & Clean API",
    description: "Easy-to-use interface for calling different pre-trained ML nowcasting algorithms",
  },
  {
    icon: Zap,
    title: "Model Training",
    description: "Comprehensive functionality for training ML-based nowcasting algorithms",
  },
  {
    icon: Database,
    title: "Testing Datasets",
    description: "Access benchmarking datasets stored on European Weather Cloud S3",
  },
  {
    icon: GitBranch,
    title: "CI/CD Testing",
    description: "Automated testing through GitHub Actions with GPU support",
  },
  {
    icon: Users,
    title: "Equal Ownership",
    description: "All contributors have equal ownership in the development software",
  },
  {
    icon: BarChart3,
    title: "Benchmarking Tools",
    description: "Built-in functionality to benchmark and compare different models",
  },
];

export const Features = () => {
  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">Package Features</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A unified Python package designed for the nowcasting community
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="p-6 hover:shadow-elevated transition-all duration-300 border-border/50 hover:border-primary/30 group"
              >
                <div className="space-y-4">
                  <div className="h-12 w-12 rounded-lg bg-gradient-sky flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
