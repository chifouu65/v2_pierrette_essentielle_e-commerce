"use client";
import ProductList from "@/app/boutique/components/ProductList";
import useApi from "@/app/hooks/useApi";
import React, {SetStateAction, useState} from "react";
import {IProduct} from "../types/types";
import Tabs from "@/app/boutique/components/tabs";

export default function Page() {
    const [selectedSubCategory, setSelectedSubCategory] = React.useState([]);
    const [maxPrice, setMaxPrice] = useState(300);

    const {data, loading, error} = useApi(
        `/sub-categories?[filters][categories][id][$eq]=2`
    );

    const handleChange = (e: SetStateAction<number>) => {
        if (selectedSubCategory.includes(
            // @ts-ignore
            e
        )) {
            setSelectedSubCategory(selectedSubCategory.filter((item) => item !== e));
        } else {
            setSelectedSubCategory([
                // @ts-ignore
                e]);
        }
    };

    // @ts-ignore
    const tabs = data?.map((item: IProduct) => (
        {
            name: item.attributes.title,
            onClick: () => handleChange(item.id),
            // @ts-ignore
            current: selectedSubCategory == item.id
        }
    ));

    if (error) return <>Error</>
    if (!loading) return (
        <div>
            {tabs !== undefined &&
                tabs.length > 0 &&
                <Tabs setSelectedSubCategory={setSelectedSubCategory} tabs={tabs}/>}
            {/* @ts-ignore */}
            <ProductList
                selectedSubCategory={selectedSubCategory}
                maxPrice={maxPrice}
            />
        </div>
    )
}