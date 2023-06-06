import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { IntlProvider } from "react-intl";
import en from "@/lang/en.json";
import uk from "@/lang/uk.json";

enum Locales {
  en = "en",
  uk = "uk",
}

import { Inter, Roboto } from "@next/font/google";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin", "cyrillic"], weight: ["400"] });
const roboto = Roboto({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "700"],
});

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [locale, setLocale] = useState<string>(Locales.en);

  useEffect(() => {
    setLocale(router.locale?.toString() || Locales.en);
  }, [router.locale]);

  return (
    <>
      <IntlProvider
        locale={locale}
        defaultLocale={Locales.en}
        messages={locale == Locales.uk ? uk : en}
      >
        <Component {...pageProps} />
      </IntlProvider>
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
        .family-roboto {
          font-family: ${roboto.style.fontFamily};
        }
      `}</style>
    </>
  );
}
