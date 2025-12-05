import MemberSpotlight from '../MemberSpotlight'
import member1 from '@assets/generated_images/professional_woman_leader_portrait_9070e067.png'
import member2 from '@assets/generated_images/Asian_woman_leader_portrait_20969a48.png'
import member3 from '@assets/generated_images/Latina_woman_leader_portrait_885179f2.png'

export default function MemberSpotlightExample() {
  const members = [
    {
      name: "Sarah Johnson",
      title: "CEO, Tech Innovation Fund",
      location: "San Francisco, USA",
      quote: "Joining Global Women Rising connected me with incredible leaders who share my passion for empowering the next generation of women entrepreneurs.",
      image: member1
    },
    {
      name: "Li Wei Chen",
      title: "Director of Social Impact",
      location: "Singapore",
      quote: "Through this community, I've found both mentors and mentees, creating a powerful network of support across continents.",
      image: member2
    },
    {
      name: "Maria Rodriguez",
      title: "Philanthropist & Advocate",
      location: "Mexico City, Mexico",
      quote: "The collective giving circles have amplified our impact far beyond what I could achieve alone. Together, we're creating real change.",
      image: member3
    }
  ]

  return <MemberSpotlight members={members} />
}
