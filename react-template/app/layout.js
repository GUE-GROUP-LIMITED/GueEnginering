import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.gueengineering.com";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "GUE Engineering Limited",
  legalName: "GUE Engineering Limited",
  url: siteUrl,
  logo: `${siteUrl}/brand/logo.png`,
  email: "hello@gueengineering.com",
  telephone: "+2349041157068",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Abuja",
    addressCountry: "NG",
  },
  parentOrganization: {
    "@type": "Organization",
    name: "Gue Group Limited",
    url: "https://www.guegroup.com",
  },
  sameAs: [
    "https://www.guegroup.com",
    "https://www.guecyber.ng",
    "https://www.guecyber.com",
    "https://www.gabrielaloho.com",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "GUE Engineering Limited",
  url: siteUrl,
  inLanguage: "en-NG",
};

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "GUE Engineering Limited | Software, AI Automation & DevOps — Nigeria",
    template: "%s | GUE Engineering Limited",
  },
  description:
    "GUE Engineering Limited specializes in software development, AI-powered automation, SaaS and open-source solutions, DevOps and cloud engineering, and IT training in Nigeria.",
  keywords: [
    "GUE Engineering",
    "Software Development Nigeria",
    "AI Automation Nigeria",
    "DevOps and Cloud Engineering",
    "SaaS Development",
    "IT Training Nigeria",
    "Agency Banking Technology",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "/",
    siteName: "GUE Engineering Limited",
    title: "GUE Engineering Limited | Software, AI Automation & DevOps — Nigeria",
    description:
      "Software development, AI-powered automation, SaaS and open-source delivery, DevOps and cloud engineering, and practical IT training in Nigeria.",
    images: [
      {
        url: "/brand/logo.png",
        width: 512,
        height: 512,
        alt: "GUE Engineering Limited logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GUE Engineering Limited | Software, AI Automation & DevOps — Nigeria",
    description:
      "Software development, AI-powered automation, SaaS and open-source delivery, DevOps and cloud engineering, and practical IT training in Nigeria.",
    images: ["/brand/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/brand/logo.png", type: "image/png" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [{ url: "/brand/logo.png", type: "image/png" }],
    shortcut: [{ url: "/brand/logo.png", type: "image/png" }],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
