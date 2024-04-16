// Importing required components
// import Banner from "@/components/Banner/Banner";          //  banner component

import BannerComp from "@/components/BannerComp/BannerComp";
import ServicesComp from "@/components/ServicesComp/ServicesComp";

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
      <ServicesComp/>
    </main>
  )
}
