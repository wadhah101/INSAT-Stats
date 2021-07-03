import React from "react";

import { Container } from "@components";
import { NextPage } from "next";
import Link from "next/link";
import axios from "axios";

// COOOODE NOW REFACTOR LATER
// TODO FIX THIS BAD CODE PROTOTYPE

const Home: NextPage = () => {
    const instance = axios.create({
        baseURL: process.env.BASE_URL,
    });

    const regenerateJSON = () => {
        instance
            .get("/api/export/filiere")
            .then(() => instance.get("/api/export/gl3"))
            .then(() => instance.get("/api/export/mpi"))
            .then(() => console.log("OK JSON"));
    };

    return (
        <Container>
            <div className="px-2 mx-auto my-8 md:px-0 md:my-20 md:w-8/12 "></div>

            <Link passHref href="/filiere/gl3-2021/indiv">
                <a> GL3-2021 </a>
            </Link>

            <Link passHref href="/filiere/mpi-2021/indiv">
                <a> MPI-2021 </a>
            </Link>
            <button onClick={regenerateJSON} className="p-4 bg-blue-100">
                regenerate
            </button>
        </Container>
    );
};

export default Home;
