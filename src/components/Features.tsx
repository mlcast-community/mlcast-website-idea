import { Card } from "@/components/ui/card";
import { Code, Zap, Database, GitBranch, Users, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Code,
    title: "Simple & Clean API",
    description: "Easy-to-use interface for calling different pre-trained ML nowcasting algorithms",
    note: "In design phase",
  },
  {
    icon: Zap,
    title: "Model Training",
    description: "Comprehensive functionality for training ML-based nowcasting algorithms",
    note: "Coming soon",
  },
  {
    icon: Database,
    title: "Source & Training Datasets",
    description: "Access datasets stored on European Weather Cloud S3 directly in code",
    url: "https://github.com/mlcast-community/mlcast-datasets/",
  },
  {
    icon: GitBranch,
    title: "CI/CD Testing",
    description: "Automated testing through GitHub Actions with GPU support",
    note: "In progress",
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
    note: "Planned",
  },
];

export const Features = () => {
  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">The MLCast plan</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A unified Python package designed for the nowcasting community
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const CardContent = (
              <div className="space-y-4">
                <div className="h-12 w-12 rounded-lg bg-gradient-sky flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
                {feature.url && (
                  <p className="text-sm text-primary font-medium underline">
                    Learn more
                  </p>
                )}
              </div>
            );

            return (
              <Card
                key={index}
                className="relative p-6 hover:shadow-elevated transition-all duration-300 border-border/50 hover:border-primary/30 group"
              >
                {feature.note && (
                  <span className="absolute top-2 right-2 bg-primary text-white text-xs font-semibold px-2 py-1 rounded">
                    {feature.note}
                  </span>
                )}
                {feature.url ? (
                  <a
                    href={feature.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    {CardContent}
                  </a>
                ) : (
                  CardContent
                )}
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
