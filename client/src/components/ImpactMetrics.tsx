import { Card } from "@/components/ui/card";

interface Metric {
  value: string;
  label: string;
}

interface ImpactMetricsProps {
  metrics: Metric[];
}

export default function ImpactMetrics({ metrics }: ImpactMetricsProps) {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <Card
              key={index}
              className="p-8 text-center"
              data-testid={`card-metric-${index}`}
            >
              <div className="text-4xl md:text-5xl font-bold text-chart-2 mb-2">
                {metric.value}
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                {metric.label}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
