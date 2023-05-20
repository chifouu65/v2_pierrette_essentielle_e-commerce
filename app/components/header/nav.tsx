"use client";
import NavDesktop from "@/app/components/header/navDesktop";
import NavPhone from "@/app/components/header/navPhone";
import React from "react";
import Cart from "@/app/components/cart/cart";

export default function Nav() {

    const links = [
        {href: '/boutique', text: 'boutique'},
        {href: '/about', text: 'about'},
    ]

    const [cartIsOpen, setCartIsOpen] = React.useState(false);

    const products = [
        {
            id: 1,
            name: 'Throwback Hip Bag',
            href: '#',
            color: 'Salmon',
            price: '$90.00',
            quantity: 1,
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
            imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
        },
        {
            id: 2,
            name: 'Medium Stuff Satchel',
            href: '#',
            color: 'Blue',
            price: '$32.00',
            quantity: 1,
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
            imageAlt:
                'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
        },
        // More products...
    ]

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
            <Cart
                products={products}
                cartIsOpen={cartIsOpen} setCartIsOpen={setCartIsOpen}/>
        </nav>
    )
}