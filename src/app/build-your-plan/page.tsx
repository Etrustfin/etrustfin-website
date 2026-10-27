import type { Metadata } from "next";
import PlanFunnel from "@/components/PlanFunnel";

export const metadata: Metadata = {
  title: "Build Your Financial Plan",
  description:
    "Answer a few quick questions and book a complimentary Financial Plan Check-Up with Essential Trust Financial in Newport Beach, CA.",
  // A campaign landing page for links in social bios and ads. Keep it out of search results
  // so it does not compete with the main site.
  robots: { index: false, follow: true },
};

export default function BuildYourPlanPage() {
  return <PlanFunnel />;
}
