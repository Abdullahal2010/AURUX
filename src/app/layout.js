import "./globals.css";
import { AccessibilityProvider } from "@/context/AccessibilityContext";
import AccessibilityPanel from "@/components/AccessibilityPanel";

export const metadata = {
  title: "AURUX — AI & Infrastructure Farm",
  description:
    "AURUX pairs a full-stack AI development studio with our own compute farm — so the models we build for you run on infrastructure we grow, tend, and control ourselves.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <AccessibilityProvider>
          <a href="#main-content" className="skip-link">Skip to main content</a>
          <div id="main-content">{children}</div>
          <AccessibilityPanel />
        </AccessibilityProvider>
      </body>
    </html>
  );
}

