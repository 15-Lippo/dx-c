import type { AppProps } from "next/app";
import { MenuProvider } from "../common/providers";

function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <MenuProvider>
        <Component {...pageProps} />
    </MenuProvider>
  );
}

export default App;
