import React from 'react'
import Drawer from "@/app/components/drawer";
import {AiOutlineClose, AiOutlineMenu, AiOutlineShoppingCart} from "react-icons/ai";
import Link from "next/link";

function Item({text, href}: {text: string, href: string}) {
    return (
        <li className='
            block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50
        '>
            <Link href={href}>
                {text}
            </Link>
        </li>
    )
}

export default function NavPhone({ links, cartIsOpen, setCartIsOpen }: {
    links: {text: string, href: string}[],
    cartIsOpen: boolean,
    setCartIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
}) {
    const [isOpen, setIsOpen] = React.useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <nav
            className="
            block
            md:hidden"
        >
            <button onClick={toggle}>
                <AiOutlineMenu size={22}/>
            </button>
            <Drawer
                setIsOpen={setIsOpen}
                title="Menu"
                isOpen={isOpen}>
                <div className="-mx-3 py-6 pt-12">
                    <div className="space-y-2" id="disclosure-1">
                        {links.map((link, index) => (
                            <Item key={index} href={link.href} text={link.text.toUpperCase()}/>
                            ))
                        }
                    </div>
                </div>
                <div className="ml-4 pt-6">
                    <button
                        onClick={() => setCartIsOpen(!cartIsOpen)}
                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        <AiOutlineShoppingCart size={22}/>
                    </button>
                </div>
            </Drawer>
        </nav>
    )
}