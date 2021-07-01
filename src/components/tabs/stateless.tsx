import * as React from "react";
import clsx from "clsx";

interface ITabsProps {
    data: string[];
    current: number;
    onSelect: (e: number) => void;
}

const Tabs: React.FunctionComponent<ITabsProps> = ({
    data,
    current,
    onSelect,
}) => (
    <div className="flex justify-center border-b border-black border-opacity-10">
        {data.map((e, ind) => (
            <button
                className={clsx(
                    "px-8 transition-colors  font-mediu duration-500 mx-1 py-3   rounded-t ",
                    current === ind
                        ? " text-pink-400 bg-pink-100 "
                        : "text-black text-opacity-50",
                )}
                onClick={() => {
                    onSelect(ind);
                }}
                key={ind}
            >
                {e}
            </button>
        ))}
    </div>
);

export default Tabs;
