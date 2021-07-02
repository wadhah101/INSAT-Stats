import React from "react";
import { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import "@styles/global.scss";
import { Provider } from "react-redux";
import store from "@redux/store";
import Head from "next/head";
import { Header } from "@components/header";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <Provider store={store}>
            <Head>
                <title>GL3 Statistics</title>
                <meta
                    property="og:title"
                    content="GL3 2021 - 2020 Statistics"
                />
                <meta
                    property="og:description"
                    content="A Website containing GL3 2021 Statistics and tool to compare and rank them "
                />
                <meta property="og:image" content="/thumbnail.jpg" />
                <meta
                    property="og:url"
                    content="https://gl3-stats.vercel.app/"
                />
            </Head>

            <Header />
            <Component {...pageProps} />
        </Provider>
    );
}

export default MyApp;
