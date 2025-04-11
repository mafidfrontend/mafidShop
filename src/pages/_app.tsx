import Footer from "@/companents/layout/Footer";
import NavHome from "@/companents/layout/NavHome";
import "@/styles/global.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <NavHome />
            <Component {...pageProps} />
            <Footer />
        </>
    );
}
