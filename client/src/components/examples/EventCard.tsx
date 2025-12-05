import EventCard from '../EventCard'
import advocacyImage from '@assets/generated_images/woman_leader_advocacy_presentation_4a8494de.png'

export default function EventCardExample() {
  return (
    <div className="max-w-2xl">
      <EventCard
        title="Leadership Summit 2025"
        date="March 15, 2025"
        location="Virtual Event"
        description="Join us for our annual leadership summit featuring keynote speakers, breakout sessions, and networking opportunities with women leaders from around the world."
        image={advocacyImage}
      />
    </div>
  )
}
