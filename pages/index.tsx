import React from "react";

import { Container } from "@components";
import { NextPage } from "next";
import Link from "next/link";

// COOOODE NOW REFACTOR LATER
// TODO FIX THIS BAD CODE PROTOTYPE

const Home: NextPage = () => {
    return (
        <Container>
            <div className="px-2 mx-auto my-8 md:px-0 md:my-20 md:w-8/12 "></div>
            <Link passHref href="/filiere/gl3-2021">
                <a> GL3-2021 </a>
            </Link>

            <Link passHref href="/filiere/mpi-2021">
                <a> MPI-2021 </a>
            </Link>
        </Container>
    );
};

export default Home;
