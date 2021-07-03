import React from "react";
import { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import "@styles/global.scss";
import Head from "next/head";
import { Header } from "@components/header";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <React.Fragment>
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
        </React.Fragment>
    );
}

export default MyApp;
