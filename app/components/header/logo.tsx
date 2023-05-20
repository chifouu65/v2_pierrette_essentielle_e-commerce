import Image from "next/image";
import Link from "next/link";

export default function Logo() {
    return (
        <Link
            href="/"
            className="flex items-center justify-center cursor-pointer gap-2"
        >
            <Image
                src='/images/logo.png'
                alt={'logo'}
                priority
                width={48}
                height={48}
                className=" w-12 h-12 md:w-14 md:h-14 object-cover"
            />
            <h1 className="hidden md:block text-xl font-bold text-gray-800">
                Boutique
            </h1>
        </Link>
    )
}