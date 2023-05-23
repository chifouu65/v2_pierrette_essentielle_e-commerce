"use client";
import useApi from "@/app/hooks/useApi";
import { CartEnums } from "@/app/redux/features/constants";
import { Action } from "@/app/redux/store";
import React from "react";
import { useDispatch } from "react-redux";
import Link from "next/link";

export default function CartItem({item} : {
    item: {
        id: string | number,
        quantity: number | string
    }
}) {
    const {data, error, loading } = useApi(`/products/${item.id}?populate=*`);
    const dispatch = useDispatch()

    const id = data?.id
    const increment = () => {
        dispatch(
            Action(CartEnums.ADD_ITEM_TO_CART,
                {
                    id,
                    quantity: Number(item.quantity) + 1
                })
        )
    }

    const decrement = () => {
        dispatch(
            Action(CartEnums.UPDATE_ITEM_IN_CART, {
                id,
                quantity: Number(item.quantity) - 1
            })
        )
    }
    const handleRemove = () => {
        dispatch(
            Action(CartEnums.REMOVE_ITEM_FROM_CART, id)
        )
    }
    return (
        <>
        {
        data !== null && !loading && !error &&
        <li key={data.id} className="flex py-6">
            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                <img
                    src={process.env.NEXT_PUBLIC_UPLOAD_URL + data.attributes?.img?.data?.attributes?.url}
                    alt={data?.attributes?.title}
                    className="h-full w-full object-cover object-center"
                />
            </div>
            <div className="ml-4 flex flex-1 flex-col">
                <div>
                    <div className="flex justify-between text-base font-medium text-gray-900">
                        <h3>
                            <Link href={''}>{data?.attributes?.title}</Link>
                        </h3>
                        <p className="ml-4">{
                            (data?.attributes?.price).toFixed(2)
                        }€</p>
                    </div>
                </div>
                <div className="flex flex-1 items-end justify-between text-sm">
                    <p className="text-gray-500">
                        Quantity: {item.quantity}
                    </p>
                    <div className="flex gap-4 justify-center items-center">
                        <button
                            onClick={increment}
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                            >
                            +1
                        </button>
                        <span className="text-gray-500">|</span>
                        <button
                            onClick={decrement}
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                            >
                            -1
                        </button>
                    </div>


                    <div className="flex">
                        <button
                            onClick={handleRemove}
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                         >
                            Remove
                        </button>
                    </div>
                </div>
             </div>
           </li>
        }
        </>
    )
}