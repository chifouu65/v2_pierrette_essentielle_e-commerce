import {AiOutlineShoppingCart} from "react-icons/ai";
import React from "react";
import Link from "next/link";

function Item({text, href}: ILink) {
    return (
        <li className='
            text-sm
            text-gray-500
            hover:text-gray-900
            transition
            duration-200
        '>
            <Link href={href}>
                {text}
            </Link>
        </li>
    )
}

export default function NavDesktop({ links, cartIsOpen, setCartIsOpen }: {
    links: ILink[],
    cartIsOpen: boolean,
    setCartIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
}) {
    return (
        <nav className='
            hidden
            md:flex
            items-center
            justify-between
        '>
            <ul className='flex gap-x-4'>
                {links.map((link, index) => (
                    <Item key={index} href={link.href} text={link.text.toUpperCase()}/>
                ))}
                <button
                    onClick={() => setCartIsOpen(!cartIsOpen)}
                >
                    <AiOutlineShoppingCart size={22}/>
                </button>
            </ul>
        </nav>
    )
}