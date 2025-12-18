import StoryCard from '../StoryCard'
import impactImage from '@assets/generated_images/women_community_economic_empowerment_e410a0c8.png'

export default function StoryCardExample() {
  return (
    <div className="max-w-sm">
      <StoryCard
        title="Empowering Women Entrepreneurs in Rural Communities"
        excerpt="How our giving circles funded microloans that transformed an entire village's economy and created sustainable opportunities for women-led businesses."
        category="Impact Story"
        date="February 10, 2025"
        image={impactImage}
        slug="empowering-women-entrepreneurs"
      />
    </div>
  )
}
