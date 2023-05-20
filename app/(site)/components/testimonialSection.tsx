import {BsCursorText} from "react-icons/bs";

export default function TestimonialSection({person} : {person: { name: string; job: string; text: string; image: string; }[]}) {
    return (
        <div className={'min-h-screen flex flex-col justify-center items-center px-4'}>
            <div className="mx-auto text-center md:max-w-xl lg:max-w-3xl">
                <h3
                    className="mb-6 text-3xl font-bold text-neutral-800 ">
                    Les avis de nos clients
                </h3>
                <p className="mb-6 pb-2 md:mb-12 md:pb-0">
                    Découvrez les avis de nos clients sur nos services et nos produits.
                </p>
            </div>

            <div className="grid gap-6 text-center md:grid-cols-3 lg:gap-12">
                {
                    person.map((item, index) => (
                        <div className="mb-12 md:mb-0" key={index}>
                            <div className="mb-6 flex justify-center">
                                <img src={item.image} className="w-32 rounded-full shadow-lg"/>
                            </div>
                            <h5 className="mb-4 text-xl font-semibold">{item.name}</h5>
                            <h6 className="mb-4 font-semibold text-primary">
                                {item.job}
                            </h6>
                            <p className="mb-4">
                                <BsCursorText className="inline-block h-7 w-7 pr-2"/>
                                {item.text}
                            </p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}