import Hero from '../Hero'
import heroImage from '@assets/generated_images/diverse_women_leaders_collaborating_e557efd8.png'

export default function HeroExample() {
  return (
    <Hero
      image={heroImage}
      title="Empowering Women to Rise, Lead, and Thrive"
      subtitle="Global Women Rising is an international community of visionary women leaders, changemakers, and philanthropists accelerating gender equality through collective giving, mentorship, and advocacy."
    />
  )
}
