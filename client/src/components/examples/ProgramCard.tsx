import ProgramCard from '../ProgramCard'
import { Users } from 'lucide-react'
import mentorshipImage from '@assets/generated_images/women_mentorship_circle_session_abc40410.png'

export default function ProgramCardExample() {
  return (
    <div className="max-w-sm">
      <ProgramCard
        icon={Users}
        title="Mentorship & Leadership"
        description="Connect with experienced leaders for guidance, support, and professional development through our global mentorship network."
        link="/programs"
        image={mentorshipImage}
      />
    </div>
  )
}
