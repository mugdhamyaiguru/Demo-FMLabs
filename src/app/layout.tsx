import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { PersistentNavbar } from "@/components/persistent-navbar";

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: {
    default: "FutureMinds AI Labs",
    template: "%s | FutureMinds AI Labs",
  },
  description: "Personalized AI-powered learning for the next generation.",
  openGraph: {
    title: "FutureMinds AI Labs",
    description: "Personalized AI-powered learning for students, teachers, and parents.",
    url: "/",
    siteName: "FutureMinds AI Labs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FutureMinds AI Labs",
    description: "Personalized AI-powered learning for students, teachers, and parents.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/*
          No-flash script: only adds `dark` class if user has EXPLICITLY chosen dark
          in settings. Never reads system prefers-color-scheme. Default = light.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{
              var m=localStorage.getItem('fm-theme');
              var dark=(m==='dark')||(m==='system'&&window.matchMedia('(prefers-color-scheme: dark)').matches)||(!m&&window.matchMedia('(prefers-color-scheme: dark)').matches);
              if(dark)document.documentElement.classList.add('dark');
            }catch(e){}})();`,
          }}
        />
      </head>
      <body>
        <ThemeProvider>
          <a href="#main-content" className="skip-link">
            Skip to content
          </a>
          <div id="main-content" tabIndex={-1} className="min-h-screen outline-none">
            <PersistentNavbar />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}