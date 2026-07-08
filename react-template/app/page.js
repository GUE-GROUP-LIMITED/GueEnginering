import GueEngineeringLanding from "@/components/home/GueEngineeringLanding";

export const metadata = {
  title: "Software, AI Automation & Cloud Engineering",
  description:
    "GUE Engineering Limited delivers software development, AI automation, SaaS and open-source solutions, DevOps and cloud engineering, IT training, and UBA Moni agency banking support in Nigeria.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Software, AI Automation & Cloud Engineering | GUE Engineering Limited",
    description:
      "Engineering-led software delivery, AI-powered automation, and cloud operations in Nigeria.",
    url: "/",
  },
  twitter: {
    title: "Software, AI Automation & Cloud Engineering | GUE Engineering Limited",
    description:
      "Engineering-led software delivery, AI-powered automation, and cloud operations in Nigeria.",
  },
};

const HomePage = () => {
  return <GueEngineeringLanding />;
};

export default HomePage;
