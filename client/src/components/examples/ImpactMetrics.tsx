import ImpactMetrics from '../ImpactMetrics'

export default function ImpactMetricsExample() {
  const metrics = [
    { value: "15,000+", label: "Members Worldwide" },
    { value: "$250M", label: "Grants Awarded" },
    { value: "85", label: "Countries Reached" },
    { value: "2M+", label: "Lives Impacted" },
  ]

  return <ImpactMetrics metrics={metrics} />
}
