import { Card } from "@/components/ui/card";
import { Calendar, MessageSquare, Laptop } from "lucide-react";

const communityAspects = [
  {
    icon: Calendar,
    title: "Regular Meetings",
    description: "Join our community meetings to discuss package development and scientific advancements",
  },
  {
    icon: MessageSquare,
    title: "Open Discussion",
    description: "Collaborative development of techniques for nowcasting with machine learning",
  },
  {
    icon: Laptop,
    title: "GPU Access Sharing",
    description: "Democratizing access to computational resources across institutes",
  },
];

export const Community = () => {
  return (
    <section className="py-24 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">Join the Community</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Collaborate with researchers and developers advancing nowcasting technology
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {communityAspects.map((aspect, index) => {
            const Icon = aspect.icon;
            return (
              <Card
                key={index}
                className="p-8 text-center hover:shadow-elevated transition-all duration-300 border-border/50"
              >
                <div className="space-y-4">
                  <div className="h-16 w-16 rounded-full bg-secondary/20 flex items-center justify-center mx-auto">
                    <Icon className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold">{aspect.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {aspect.description}
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
