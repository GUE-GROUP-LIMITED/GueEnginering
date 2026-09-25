import GueEngineeringLanding from "@/components/home/GueEngineeringLanding";

export const metadata = {
  title: "Software, AI Automation & Cloud Engineering",
  description:
    "GUE Engineering Limited delivers software development, AI automation, SaaS and open-source solutions, DevOps and cloud engineering, and IT training for businesses and developers across Nigeria.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Software, AI Automation & Cloud Engineering | GUE Engineering Limited",
    description:
      "Engineering-led software delivery, AI-powered automation, and cloud operations in Nigeria.",
    url: "/",
    images: ["/brand/og-cover.svg"],
  },
  twitter: {
    title: "Software, AI Automation & Cloud Engineering | GUE Engineering Limited",
    description:
      "Engineering-led software delivery, AI-powered automation, and cloud operations in Nigeria.",
    images: ["/brand/og-cover.svg"],
  },
};

const HomePage = () => {
  return <GueEngineeringLanding />;
};

export default HomePage;
