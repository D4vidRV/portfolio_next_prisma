import Navbar from "./components/navbar";
import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Provider } from "./components/provider";
import { useLocale } from "next-intl";
import { notFound } from "next/navigation";
import { useTranslations, useMessages } from "next-intl";
import { NextIntlClientProvider } from "next-intl";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "David Ramirez fullstack portfolio",
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: any;
}) {
  const t = useTranslations("Index");
  const locale = useLocale();
  // Show a 404 error if the user requests an unknown locale
  if (params.locale !== locale) {
    notFound();
  }
  const messages = useMessages();
  return (
    <html lang={locale}>
      <body
        className={`${inter.className} bg-white text-black dark:bg-[#090908] dark:text-white h-full selection:bg-gray-300 dark:selection:bg-gray-800`}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Provider>
            <Navbar />
            <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              {children}
            </main>
          </Provider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
