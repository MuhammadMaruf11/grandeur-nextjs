// Importing required components
// import Banner from "@/components/Banner/Banner";          //  banner component

import BannerComp from "@/components/BannerComp/BannerComp";
import { PricingComp } from "@/components/PricingComp/PricingComp";
import ServicesComp from "@/components/ServicesComp/ServicesComp";
import SolutionsComp from "@/components/SolutionsComp/SolutionsComp";

/**
 * Home page component
 * 
 * This component represents the main landing page of the application.
 * It includes the following sections:
 * - Banner:  banner of the website
 * - FeatureTitleComp: Title component for the features section
 * - FeatureComp: Feature component showcasing the main features
 * - ReportComp: Report component for displaying a claim
 */
export default function Home() {
  return (
    <main>
      <BannerComp />
      <div className="bg-[url('/img/bg/BGLine-01.webp')] bg-cover bg-no-repeat bg-top py-20">
        <ServicesComp />
        <PricingComp />
        <SolutionsComp />
      </div>
    </main>
  )
}
