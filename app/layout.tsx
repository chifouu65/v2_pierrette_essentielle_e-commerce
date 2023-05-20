import './style/globals.css'
import {Inter} from 'next/font/google'
import Header from "@/app/components/header/header";
import React from "react";
import Footer from "@/app/components/footer/footer";
import ToasterContext from "@/app/context/ToasterContext";

const inter = Inter({subsets: ['latin']})

export default function RootLayout({children}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={inter.className}>
            <ToasterContext/>
            <Header/>
            {children}
            <Footer/>
        </body>
        </html>
    )
}
