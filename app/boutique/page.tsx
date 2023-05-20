"use client";
import ProductList from "@/app/boutique/components/ProductList";
import useApi from "@/app/hooks/useApi";
import React, {SetStateAction, useState} from "react";

export default function Page() {
    const [ selectedSubCategory, setSelectedSubCategory] = React.useState([]);
    const [ maxPrice, setMaxPrice ] = useState(300);

    const {data, loading, error} = useApi(
        `/sub-categories?[filters][categories][id][$eq]=2`
    );

    const handleChange = (e : SetStateAction<number>) => {
        if (selectedSubCategory.includes(
            // @ts-ignore
            e
        )) {
            setSelectedSubCategory(selectedSubCategory.filter((item) => item !== e));
        }
        else {
            setSelectedSubCategory([
                // @ts-ignore
                e]);
        }
    };

    if (error) return <>Error</>
    if (!loading) return (
        <div>
            {/* filter */}
            <>
                <div className="mx-4 border flex flex-col justify-between md:rounded-md overflow-hidden">
                    <div className="flex flex-col md:flex-row justify-center items-center w-full ">
                        <button
                            className={
                                selectedSubCategory.length === 0 ?
                                    "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-full h-full md:h-16" :
                                    "bg-blue-200 hover:bg-blue-300 text-white font-bold py-2 px-4 w-full h-full md:h-16"
                            }
                            onClick={() => setSelectedSubCategory([])}
                        >
                            All
                        </button>
                        {data?.map((item: IProduct) => (
                            <button key={item.id}
                                    className={
                                        // @ts-ignore
                                        selectedSubCategory == item.id
                                         ?
                                            "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-full h-full md:h-16" :
                                            "bg-blue-200 hover:bg-blue-300 text-white font-bold py-2 px-4 w-full h-full md:h-16"
                                    }
                                    onClick={() => handleChange(item.id)}>
                                {item.attributes.title}
                            </button>
                        ))}
                    </div>
                    <div
                        className="border flex gap-4 flex-row items-center justify-center text-black font-bold py-2 px-4 w-full h-full"
                        onClick={() => setSelectedSubCategory([])}
                    >
                        <p>
                            {maxPrice}€
                        </p>
                        <input
                            id="steps-range"
                            type="range"
                            min={0}
                            max={200}
                            onChange={(e) => setMaxPrice(
                                e.target.value as any
                            )}
                            value={maxPrice}
                            step="1"
                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"/>
                    </div>
                </div>
            </>
            {/* @ts-ignore */}
            <ProductList
                selectedSubCategory={selectedSubCategory}
                maxPrice={maxPrice}
            />
        </div>
    )
}