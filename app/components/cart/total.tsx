import React from "react";
import useApi from "@/app/hooks/useApi";


export default function Total({item} : {
    item: {
        id: string | number,
        quantity: number | string
    }
}) {
    const {data, error, loading } = useApi(`/products/${item.id}?populate=*`);

    const totalPrice = (data?.attributes?.price * Number(item.quantity)).toFixed(2)

    return (
        <>
            {
                (data !== null && !error && !loading) &&
                <div className="flex justify-between text-base font-medium text-gray-900">
                    <p>Subtotal</p>
                    <p>{totalPrice}€</p>
                </div>
            }
        </>
    )
}