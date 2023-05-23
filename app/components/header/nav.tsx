"use client";
import NavDesktop from "@/app/components/header/navDesktop";
import NavPhone from "@/app/components/header/navPhone";
import React from "react";
import Cart from "@/app/components/cart/cart";
import { useSelector } from "react-redux";

export default function Nav() {

    const links = [
        {href: '/boutique', text: 'boutique'},
        {href: '/about', text: 'about'},
    ]

    const [cartIsOpen, setCartIsOpen] = React.useState(false);

    const productsCart = useSelector((state:any) => state.cart.cart)

    return (
        <nav className="
            flex
            items-center
            justify-between
        ">
            <NavDesktop
                cartIsOpen={cartIsOpen}
                setCartIsOpen={setCartIsOpen}
                links={links}
            />
            <NavPhone
                cartIsOpen={cartIsOpen}
                setCartIsOpen={setCartIsOpen}
                links={links}
            />
            {
                productsCart !== null && 
                <Cart
                    products={productsCart}
                    cartIsOpen={cartIsOpen} setCartIsOpen={setCartIsOpen}
                />
            }
        </nav>
    )
}