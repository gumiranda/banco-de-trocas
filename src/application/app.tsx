import { AllProviders } from "application/providers";
import type { AppProps } from "next/app";
import { SidebarPanel, NavBar } from "widgets";
import { Analytics } from "@vercel/analytics/react";

function App({ Component, pageProps }: AppProps) {
  return (
    <AllProviders pageProps={pageProps}>
      <>
        <NavBar />
        <SidebarPanel />
        <Component {...pageProps} />
        <Analytics />
      </>
    </AllProviders>
  );
}
export default App;
