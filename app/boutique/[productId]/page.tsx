"use client";
import React from 'react';
import ProductView from "@/app/boutique/[productId]/components/productView";
import useApi from "@/app/hooks/useApi";
interface Params {
    params: { productId: string }
}

export default function Page({params} : Params) {
    const id = params?.productId
    const { data, error, loading } = useApi(`/products/${id}?populate=*`)

    if (!loading && data !== null) {
        return (
            <>
                <ProductView product={data}/>
            </>
        )
    }
}