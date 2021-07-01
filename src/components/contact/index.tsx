import * as React from "react";

const Contact: React.FunctionComponent = () => {
    return (
        <div className="mb-2 text-black text-opacity-50 ">
            <p>
                Check the source code on&nbsp;
                <a
                    target="_blank"
                    className="text-blue-400 hover:underline"
                    rel="noopener"
                    href="https://github.com/wadhah101/GL3-Statistics"
                >
                    Github
                </a>
                &nbsp;and don't forget to follow me !
            </p>
        </div>
    );
};

export default Contact;
