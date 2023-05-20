import React from 'react'
import Button from "@/app/components/buttons/button";

interface IMainSection {
    title: string
    subTitle: string
    text: string
    data: IProduct[]
}

export default function MainSection({ title, subTitle, text, data }: IMainSection) {

    const random = () => {
        const min = 0;
        const max = 20;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const images = [
        {
            id: 0,
            src: process.env.NEXT_PUBLIC_UPLOAD_URL + data[random() || 0]?.attributes?.img?.data?.attributes?.url,
            alt: "product img 0"
        },
        {
            id: 1,
            src: process.env.NEXT_PUBLIC_UPLOAD_URL + data[random() || 1]?.attributes?.img?.data?.attributes?.url,
            alt: "product img 1"
        },
        {
            id: 2,
            src: process.env.NEXT_PUBLIC_UPLOAD_URL + data[random() || 2]?.attributes?.img?.data?.attributes?.url,
            alt: "product img 2"
        },
        {
            id: 3,
            src: process.env.NEXT_PUBLIC_UPLOAD_URL + data[random() || 3]?.attributes?.img?.data?.attributes?.url,
            alt: "product img 3"
        },
        {
            id: 4,
            src: process.env.NEXT_PUBLIC_UPLOAD_URL + data[random() || 4]?.attributes?.img?.data?.attributes?.url,
            alt: "product img 4"
        },
        {
            id: 5,
            src:  process.env.NEXT_PUBLIC_UPLOAD_URL + data[random() || 5]?.attributes?.img?.data?.attributes?.url,
            alt: "product img 5"
        },
        {
            id: 6,
            src: process.env.NEXT_PUBLIC_UPLOAD_URL + data[random() || 6]?.attributes?.img?.data?.attributes?.url,
            alt: "product img 6"
        },
    ]

    if ( data !== null ) return (
        <div className="relative overflow-hidden bg-white min-h-[90vh] z-10">
            <div className="pb-80 sm:pb-40 lg:pb-48">
                <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
                    <div className="sm:max-w-lg">
                        <h1 className="font text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                            {title}
                        </h1>
                        <h2 className="font text-2xl font-bold tracking-tight text-green-500 sm:text-3xl">
                            {subTitle}
                        </h2>
                        <p className="mt-4 text-xl text-gray-500">
                            {text}
                        </p>
                    </div>
                    <div>
                        <div className="mt-10">
                            {/* Decorative image grid */}
                            <div
                                aria-hidden="true"
                                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                            >
                                <div
                                    className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                                    <div className="flex items-center space-x-6 lg:space-x-8">
                                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                            <div
                                                className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                                                <img
                                                    src={images[0].src}
                                                    alt={images[0].alt}
                                                    className="h-full w-full object-cover object-center"
                                                />
                                            </div>
                                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                <img
                                                    src={images[1].src}
                                                    alt={images[1].alt}
                                                    className="h-full w-full object-cover object-center"
                                                />
                                            </div>
                                        </div>
                                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                <img
                                                    src={images[2].src}
                                                    alt={images[2].alt}
                                                    className="h-full w-full object-cover object-center"
                                                />
                                            </div>
                                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                <img
                                                    src={images[3].src}
                                                    alt={images[3].alt}
                                                    className="h-full w-full object-cover object-center"
                                                />
                                            </div>
                                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                <img
                                                    src={images[4].src}
                                                    alt={images[4].alt}
                                                    className="h-full w-full object-cover object-center"
                                                />
                                            </div>
                                        </div>
                                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                <img
                                                    src={images[5].src}
                                                    alt={images[5].alt}
                                                    className="h-full w-full object-cover object-center"
                                                />
                                            </div>
                                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                <img
                                                    src={images[6].src}
                                                    alt={images[6].alt}
                                                    className="h-full w-full object-cover object-center"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}