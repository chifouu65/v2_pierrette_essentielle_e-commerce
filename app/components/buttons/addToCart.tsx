"use client";
import Button from "@/app/components/buttons/button";
import toast from "react-hot-toast";
import React from "react";
import { IProduct } from "@/app/types/types";
import { useDispatch } from "react-redux";
import { Action } from "@/app/redux/store";
import { CartEnums } from "@/app/redux/features/constants";

interface IAddToCartButton {
    children?: React.ReactNode
    data: {
        product: IProduct
        quantity: number
    }
}

export default function AddToCartButton(props: IAddToCartButton) {
    const dispatch = useDispatch()
    const onClick = () => {
        dispatch(Action(CartEnums.ADD_ITEM_TO_CART, {
            id: props.data.product.id,
            quantity: props.data.quantity
        }))
        toast.success("Added to cart")
    }

    return (
        <Button onClick={onClick} type="button">
            {props.children ? props.children : "Add to cart"}
        </Button>
    )
}