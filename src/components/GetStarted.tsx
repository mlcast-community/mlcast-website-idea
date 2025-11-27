import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Terminal, BookOpen, Github } from "lucide-react";

export const GetStarted = () => {
  return (
    <section className="py-24 px-4 bg-gradient-atmospheric">
      <div className="container max-w-5xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">Get Started</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Start contributing to the nowcasting community today
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="p-6 space-y-4 text-center border-border/50">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
              <Terminal className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold">Install Package</h3>
            <p className="text-sm text-muted-foreground">
              Get started with our Python package
            </p>
          </Card>

          <Card className="p-6 space-y-4 text-center border-border/50">
            <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto">
              <BookOpen className="h-6 w-6 text-accent" />
            </div>
            <h3 className="text-lg font-semibold">Read Documentation</h3>
            <p className="text-sm text-muted-foreground">
              Learn how to use and contribute
            </p>
          </Card>

          <Card className="p-6 space-y-4 text-center border-border/50">
            <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center mx-auto">
              <Github className="h-6 w-6 text-secondary" />
            </div>
            <h3 className="text-lg font-semibold">Contribute</h3>
            <p className="text-sm text-muted-foreground">
              Join our GitHub organization
            </p>
          </Card>
        </div>

        <Card className="p-8 border-primary/20 bg-card/50 backdrop-blur">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Installation</h3>
            <div className="bg-muted/50 rounded-lg p-4 font-mono text-sm border border-border/50">
              <code className="text-foreground">pip install nowcasting-ml</code>
            </div>
            <p className="text-sm text-muted-foreground">
              For development installation and contribution guidelines, visit our GitHub repository
            </p>
            <div className="pt-4">
              <Button variant="outline" size="lg" className="group" asChild>
                <a href="https://github.com/mlcast-community" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-5 w-5" />
                  View GitHub Repository
                </a>
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
