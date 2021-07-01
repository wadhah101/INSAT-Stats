import React from "react";
import {
    PankodIcon,
    GithubIcon,
    TwitterIcon,
    YoutubeIcon,
    LinkedinIcon,
} from "@components/icons";

export const Footer: React.FC = () => {
    return (
        <div className="text-center py-5 bg-gray-800">
            <a
                href="https://github.com/pankod"
                target="_blank"
                className="block mb-3"
            >
                <PankodIcon
                    className="text-white mx-auto"
                    width="140"
                    height="28"
                />
            </a>

            <ul className="flex justify-center list-none p-0 m-0">
                <li className="mx-3">
                    <GithubIcon color="white" width="28" height="29" />
                </li>
                <li className="mx-3">
                    <TwitterIcon color="white" width="28" height="28" />
                </li>
                <li className="mx-3">
                    <YoutubeIcon color="white" width="28" height="29" />
                </li>
                <li className="mx-3">
                    <LinkedinIcon color="white" width="28" height="32" />
                </li>
            </ul>
        </div>
    );
};
