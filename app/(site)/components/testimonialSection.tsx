import {BsCursorText} from "react-icons/bs";
import {dancingScript} from "@/app/(site)/components/mainSection";

export default function TestimonialSection({person} : {person: { name: string; job: string; text: string; image: string; }[]}) {
    return (
        <div className={'min-h-screen flex flex-col justify-center items-center px-4'}>
            <div className="mx-auto text-center md:max-w-xl lg:max-w-3xl">
                <h3
                    className={
                    "text-4xl font-bold tracking-tight text-gray-900 underline underline-offset-4 " + dancingScript.className
                    }>
                    Les avis de nos clients
                </h3>
                <p className="mt-4 text-base font-normal text-gray-500 sm:text-xl mb-6">
                    Découvrez les avis de nos clients sur nos services et nos produits.
                </p>
            </div>

            <div className="grid gap-6 text-center md:grid-cols-3 lg:gap-12">
                {
                    person.map((item, index) => (
                        <div className="mb-12 md:mb-0" key={index}>
                            <div className="mb-6 flex justify-center">
                                <img alt={"profi"} src={item.image} className="w-32 rounded-full shadow-lg"/>
                            </div>
                            <h5 className="mb-4 text-xl font-semibold">{item.name}</h5>
                            <h6 className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600 mb-4">
                                {item.job}
                            </h6>
                            <p className="mb-4 text-gray-500 ">
                                <BsCursorText className="inline-block h-7 w-7 pr-2 text-gray-700"/>
                                {item.text}
                            </p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}