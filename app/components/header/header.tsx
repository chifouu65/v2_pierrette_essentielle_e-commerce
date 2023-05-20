import React from "react";
import Logo from "@/app/components/header/logo";
import Nav from "@/app/components/header/nav";

export default function Header() {
    return (
        <header className='flex p-4 justify-between h-[10vh]'>
            <Logo/>
            <Nav/>
        </header>
    )
}