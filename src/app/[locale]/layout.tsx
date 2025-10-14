import type { Metadata } from "next";
import "../globals.css";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { ThemeProvider } from "@/components/theme-provider";
import { getMessages } from "next-intl/server";

export const metadata: Metadata = {
  title: "Media Tech | Marketing Agency",
  openGraph: {
    title: "Media Tech | Marketing Agency",
    description:
      "Leading marketing agency specializing in digital campaigns, branding, and media strategies.",
    url: "https://mediatech-two.vercel.app/",
    siteName: "Media Tech",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Media Tech Marketing Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Media Tech | Marketing Agency",
    description:
      "Leading marketing agency specializing in digital campaigns, branding, and media strategies.",
    images: ["/og-image.png"],
  },
  robots: "index, follow",
};

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();
  const isRtl = locale === "ar";

  return (
    <html lang={locale} dir={isRtl ? "rtl" : "ltr"}>
      <NextIntlClientProvider messages={messages}>
        <body className="antialiased">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
