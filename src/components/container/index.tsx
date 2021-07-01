import React from "react";

export const Container: React.FC = ({ children }) => {
    return <div className="flex flex-col min-h-screen">{children}</div>;
};
