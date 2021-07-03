import React, { useState } from "react";

import Contact from "@components/contact";
import Tabs from "@components/tabs/stateless";
import { useRouter } from "next/dist/client/router";

const tabs = ["Individual", "Compare", "Ranking"];
const tabsUrl = ["indiv", "compare", "ranking"];

export const Header: React.FC = () => {
    const router = useRouter();
    const isInFiliere = router.pathname.includes("[filiere]");
    const curr = isInFiliere && router.pathname.split("/")[3];
    const currIndex = tabsUrl.findIndex((e) => e === curr);

    const onSelect = (e: number): void => {
        const newSelection = router.asPath.replace(
            router.pathname.split("/")[3],
            tabsUrl[e],
        );

        router.push(newSelection);
    };

    return (
        <header className="my-1">
            <Contact />
            {isInFiliere && (
                <Tabs onSelect={onSelect} current={currIndex} data={tabs} />
            )}
        </header>
    );
};
