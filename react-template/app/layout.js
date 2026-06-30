import "./globals.css";

export const metadata = {
  title: "GUE Engineering Limited | Software, AI Automation & DevOps — Nigeria",
  description:
    "GUE Engineering Limited specializes in software development, AI-powered automation, SaaS and open-source solutions, DevOps and cloud engineering, and IT training in Nigeria.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
