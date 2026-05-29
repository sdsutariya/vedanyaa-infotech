import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SITE, absoluteUrl } from "@/lib/site";
import { jsonLdScript, organizationJsonLd, websiteJsonLd } from "@/lib/seo";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-8xl font-display text-gradient-gold">404</h1>
        <h2 className="mt-4 text-xl font-display text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">The page you're looking for has drifted off the map.</p>
        <div className="mt-6">
          <a href="/" className="inline-flex items-center px-5 py-2.5 rounded-md bg-gold text-primary-foreground text-sm uppercase tracking-wider hover:opacity-90">
            Return Home
          </a>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-display text-foreground">Something went wrong</h1>
        <p className="mt-2 text-sm text-muted-foreground">Please try again or head back home.</p>
        <div className="mt-6 flex justify-center gap-2">
          <button onClick={() => { router.invalidate(); reset(); }} className="px-5 py-2.5 rounded-md bg-gold text-primary-foreground text-sm uppercase tracking-wider">Try again</button>
          <a href="/" className="px-5 py-2.5 rounded-md border border-border text-sm uppercase tracking-wider">Home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Vedanyaa Infotech — Premium Software, ERP & Web Development Company" },
      { name: "description", content: "Vedanyaa Infotech is a trusted software development company building PHP, MERN, Next.js, AI-driven apps, e-commerce platforms and custom ERP solutions for global clients." },
      { name: "author", content: "Vedanyaa Infotech" },
      { name: "keywords", content: "Vedanyaa Infotech, software development company, ERP development, MERN stack, Next.js, Nest.js, PHP development, AI-driven applications, e-commerce development, custom software, web development India" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { name: "googlebot", content: "index, follow" },
      { name: "theme-color", content: "#4338ca" },
      { property: "og:site_name", content: "Vedanyaa Infotech" },
      { property: "og:title", content: "Vedanyaa Infotech — Premium Software, ERP & Web Development Company" },
      { property: "og:description", content: "Trusted partner for MERN, Next.js, AI-driven apps, e-commerce and custom ERP development." },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: SITE.locale },
      { property: "og:image", content: absoluteUrl("/favicon.png") },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Vedanyaa Infotech — Software & ERP Development" },
      { name: "twitter:description", content: "Boutique software studio engineering reliable digital products." },
      { name: "twitter:image", content: absoluteUrl("/favicon.png") },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "icon", type: "image/png", sizes: "512x512", href: "/favicon.png" },
      { rel: "apple-touch-icon", href: "/favicon.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap" },
    ],
    scripts: [jsonLdScript(organizationJsonLd()), jsonLdScript(websiteJsonLd())],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});


const themeInitScript = `(() => { try { const t = localStorage.getItem('theme'); if (t === 'dark') document.documentElement.classList.add('dark'); } catch(e) {} })();`;

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 pt-20">
          <Outlet />
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}
