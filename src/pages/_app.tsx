import Footer from "@/companents/layout/Footer";
import NavHome from "@/companents/layout/NavHome";
import { store } from "@/store/store";
import "@/styles/global.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Provider } from "react-redux";
import { Toaster } from "sonner";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <Head>
                <title>MAFID Shop</title>
            </Head>
            <NavHome />
            <Toaster richColors />
            <Component {...pageProps} />
            <Footer />
        </Provider>
    );
}
