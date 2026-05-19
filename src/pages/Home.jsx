import HeroSection from '../components/home/HeroSection';
import StatsStrip from '../components/home/StatsStrip';
import ResidentialInfoSection from '../components/home/ResidentialInfoSection';
import ProxySolutionsSection from '../components/home/ProxySolutionsSection';
import EnterpriseFeaturesSection from '../components/home/EnterpriseFeaturesSection';
import IndustryAccordionSection from '../components/home/IndustryAccordionSection';
import QuickStartSection from '../components/home/QuickStartSection';
import UnlimitedPlanSection from '../components/home/UnlimitedPlanSection';
import ProxyComparisonSection from '../components/home/ProxyComparisonSection';
import FreeTrialCTA from '../components/home/FreeTrialCTA';
import FAQSection from '../components/home/FAQSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsStrip />
      <ResidentialInfoSection />
      <ProxySolutionsSection />
      <EnterpriseFeaturesSection />
      <IndustryAccordionSection />
      <QuickStartSection />
      <UnlimitedPlanSection />
      <ProxyComparisonSection />
      <FreeTrialCTA />
      <FAQSection />
    </>
  );
}
