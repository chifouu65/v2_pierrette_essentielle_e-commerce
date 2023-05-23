import {Dispatch, SetStateAction} from "react";

interface Tab {
    name: string,
    onClick: () => void,
    current: boolean
}

export default function Tabs({ tabs, setSelectedSubCategory }: { tabs: Tab[], setSelectedSubCategory: Dispatch<SetStateAction<never[]>> }) {
    const handleAll = () => {
        setSelectedSubCategory([]);
    }
    tabs.push({
        name: "All",
        onClick: () => handleAll(),
        current: false
    })
    const tab = tabs.map((tab: {
        name: string,
        onClick: () => void,
        current: boolean
    }) => (
        <li key={tab.name} className={"w-full"}>
            <button
                key={tab.name}
                onClick={tab.onClick}
                className={
                    tab.current
                        ? "w-full inline-block py-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 " :
                        "w-full bg-gray-100 inline-block py-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300"
                }
                aria-current={tab.current ? "page" : undefined}
            >
                {
                    tab.name
                }
            </button>
        </li>
    ));

    return (
        <>
            <div
                className="w-full text-sm font-medium text-center text-gray-500 border-b border-gray-200 ">
                <ul className="w-full flex flex-col md:flex-row md:-mb-px">
                    {tab}
                </ul>
            </div>

        </>
    )
}