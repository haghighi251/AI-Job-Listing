import type { Metadata } from "next";
import "@/styles/globals.css";
import { dir } from 'i18next';
import ReactQueryProvider from "@/components/ReactQueryProvider/ReactQueryProvider";
import { getServerTranslations } from "@/shared/utils/i18n/server";
import { roboto, vazirmatn } from '@/styles/fonts';
import { I18nProvider } from "@/shared/utils/i18n/i18n-context";

export async function generateMetadata() {
  const { t } = await getServerTranslations();
  return {
      title: t('metadata_title'),
      description: t('metadata_description'),
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { i18n } = await getServerTranslations();
  const language = i18n.resolvedLanguage;
  return (
    <html 
    lang={language}
    dir={dir(language)}
    >
      <body className={getFontClassName(language)}>
        <ReactQueryProvider>
        <I18nProvider language={language}>
        {children}
        </I18nProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}

function getFontClassName(language?: string) {
  return dir(language) === 'rtl' ? vazirmatn.className : roboto.className;
}