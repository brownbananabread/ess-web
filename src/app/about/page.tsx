import AspectSeparator from '@/components/sections/aspect-separator';

import AspectAboutHero from './components/aspect-about-hero';
import AspectQuote from './components/aspect-quote';
import AspectSplitSection from './components/aspect-split-section';
import AspectStats from './components/aspect-stats';
import AspectTeamCarousel from './components/aspect-team-carousel';
import AspectValues from './components/aspect-values';

export default function AboutPage() {
  return (
    <>
      <AspectAboutHero />
      <AspectStats />
      <AspectSeparator />
      <AspectSplitSection
        header="Our Mission"
        description="Ensuring the WHS needs of businesses for a safer and sustainable future. We understand that workplace health and safety is not just about ticking boxes—it's about creating environments where people can work safely, confidently, and productively."
        image="/images/about/split-section/1.webp"
        side="R"
      />
      <AspectQuote
        quote="Safety isn't just a policy—it's a promise we make to every worker and their family that they'll return home each day."
        author="Levi Mieli"
        // eslint-disable-next-line jsx-a11y/aria-role
        role="Founder & Director"
      />
      <AspectSplitSection
        header="People Focused Approach"
        description="We pride ourselves on providing a personable approach, ensuring your staff feel included in steering safety processes. This collaborative methodology fosters genuine engagement and creates lasting cultural change rather than superficial compliance."
        image="/images/about/split-section/2.webp"
        side="L"
      />
      <AspectSeparator />
      <AspectValues />
      <AspectSeparator />
      <AspectTeamCarousel />
      <AspectSeparator />
    </>
  );
}
