import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { IntlProvider } from "react-intl";
import en from "@/lang/en.json";
import uk from "@/lang/uk.json";

const langs = {
  en,
  uk,
};

import { Inter, Roboto } from "@next/font/google";

const inter = Inter({ subsets: ["latin", "cyrillic"], weight: ["400"] });
const roboto = Roboto({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "700"],
});

export default function App({ Component, pageProps }: AppProps) {
  const { locale } = useRouter();

  return (
    <IntlProvider locale={locale} defaultLocale={"en"} messages={langs[locale]}>
      <Component {...pageProps} />

      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
        .family-roboto {
          font-family: ${roboto.style.fontFamily};
        }
      `}</style>
    </IntlProvider>
  );
}
