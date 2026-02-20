import CareerBanner from "../component/careerbanner";
import WhyWorkWithUs from "../component/whyworkus";
import OpenPositions from "../component/accordian";
import BenefitsSection from "../component/benefit";
import HiringProcess from "../component/hiringprocess";
import CareerCTA from "../component/cta";

export default function CareerPage() {
  return (
    <main className="bg-[#0B1120] text-white overflow-hidden">
      <CareerBanner />
      <WhyWorkWithUs/>
      <OpenPositions/>
      <BenefitsSection/>
      <HiringProcess/>
      <CareerCTA/>

      {/* Next sections will go here */}
    </main>
  );
}