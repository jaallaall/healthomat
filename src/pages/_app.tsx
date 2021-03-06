import { CacheProvider, EmotionCache } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import { ColorModeProvider, ToggleDrawerProvider } from "context";
import type { NextPage } from "next";
import { appWithTranslation } from "next-i18next";
import { AppProps } from "next/app";
import Head from "next/head";
// import NextNProgress from "nextjs-progressbar";
import { useEffect, useMemo } from "react";
import { CookiesProvider } from "react-cookie";
// import { QueryClient, QueryClientProvider } from "react-query";
// import { ReactQueryDevtools } from "react-query/devtools";
import { cacheRtl } from "theme/cacheRtl";

const clientSideEmotionCache = cacheRtl();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

type AppPropsWithLayout = MyAppProps & {
  Component: NextPageWithLayout;
};

function MyApp(props: AppPropsWithLayout) {
  const {
    Component,
    emotionCache = clientSideEmotionCache,
    pageProps,
    router,
  } = props;
  const getLayout = Component.getLayout || ((page: React.ReactNode) => page);

  // const [queryClient] = useState(() => new QueryClient());

  const memoizedEmotionCache = useMemo(() => {
    if (router.locale === "fa") {
      return cacheRtl(true);
    }
    if (router.locale === "en") {
      return cacheRtl(false);
    }
    return emotionCache;
  }, [router, emotionCache]);

  useEffect(() => {
    document.dir = router.locale === "fa" ? "rtl" : "ltr";
  }, [router.locale]);

  return (
    <CacheProvider value={memoizedEmotionCache}>
      <CookiesProvider>
        <ColorModeProvider locale={router.locale}>
          <ToggleDrawerProvider>
            <Head>
              <title>{"healthomat"}</title>
              <meta
                name="viewport"
                content="initial-scale=1, width=device-width"
              />
            </Head>
            {/* <NextNProgressStyled height={3} /> */}
            {/* <QueryClientProvider client={queryClient}> */}
            <CssBaseline />
            {getLayout(<Component {...pageProps} />)}
            {/* <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProvider> */}
          </ToggleDrawerProvider>
        </ColorModeProvider>
      </CookiesProvider>
    </CacheProvider>
  );
}

export default appWithTranslation(MyApp);
