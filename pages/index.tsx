import React from "react";

import { Container } from "@components";
import { GetStaticProps, NextPage } from "next";
import { Filiere } from "src/@types/GenericDataObject";
import Link from "next/link";
import fsp from "fs/promises";
interface HomePageProps {
    filieres: Filiere[];
}

const Home: NextPage<HomePageProps> = ({ filieres }) => {
    return (
        <Container>
            <div className="flex flex-col self-center flex-grow px-2 md:px-0 md:w-8/12 ">
                <h1 className="self-center inline-block mt-32 text-3xl font-extrabold text-transparent md:text-9xl bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500">
                    inspect.
                    <br /> Compare.
                    <br /> Rank.
                </h1>
                <div className="flex flex-wrap items-center justify-center mt-16">
                    {filieres.map((e, ind) => (
                        <Link
                            href={`/filiere/${e.name}-${e.year}/indiv`}
                            key={ind}
                            passHref
                        >
                            <a
                                className="py-2.5 mx-2 text-lg px-8 font-bold text-white rounded shadow bg-gradient-to-br from-pink-500 to-blue-500"
                                key={ind}
                            >
                                {`${e.name}-${e.year}`.toUpperCase()}
                            </a>
                        </Link>
                    ))}
                </div>
            </div>
        </Container>
    );
};

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
    const filieres: Filiere[] = JSON.parse(
        await fsp.readFile("data/json/filiere.json", "utf-8"),
    );

    return {
        props: {
            filieres,
        },
    };
};

export default Home;
