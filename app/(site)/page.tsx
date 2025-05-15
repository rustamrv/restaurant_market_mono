import HeroSection from '../components/HeroSection';
import WelcomeSection from '../components/WelcomeSection';
import PopularMenuSection from '../components/PopularMenuSection';
import ReserveTableSection from '../components/ReserveTableSection';
import ChefSection from '../components/ChefSection';
import TestimonialSection from '../components/TestimonialSection';
import WorkingTimeSection from '../components/WorkingTimeSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col gap-[74px] px-8 py-20 sm:px-20">
      <HeroSection />
      <WelcomeSection />
      <PopularMenuSection />
      <ReserveTableSection />
      <ChefSection />
      <TestimonialSection />
      <WorkingTimeSection />
      <Footer />
    </div>
  );
}
