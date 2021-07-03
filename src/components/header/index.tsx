import React, { useState } from "react";

import Contact from "@components/contact";
import Tabs from "@components/tabs/stateless";
import { useRouter } from "next/dist/client/router";

const tabs = ["Individual", "Compare", "Ranking"];

const tabMapper = {
    Individual: "indiv",
    Compare: "compare",
    Ranking: "ranking",
};

export const Header: React.FC = () => {
    const [selectedTab, setSelectedTab] = useState(0);
    const router = useRouter();

    const onSelect = (e: number): void => {
        setSelectedTab(e);
        const splitttedPathname = router.pathname.split("/");
        // this check is stupid
        if (splitttedPathname.length >= 3) {
            const base = splitttedPathname.slice(0, 3);
            const newUrl = [...base, tabMapper[tabs[e]]];
            router.push(newUrl.join("/"));
        }
    };

    return (
        <header className="my-1">
            <Contact />
            <Tabs onSelect={onSelect} current={selectedTab} data={tabs} />
        </header>
    );
};
