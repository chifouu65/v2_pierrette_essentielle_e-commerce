import {dancingScript} from "@/app/(site)/components/mainSection";

export default function SecondSection({infos}: {
    infos: {
        title: string,
        subTitle: string,
        text: string
    }[]
}) {
    return (
        <section className="z-20 bg-white antialiased min-h-[100vh] flex flex-col justify-center items-center">
            <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
                {/* angle */}
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className={
                        dancingScript.className + " text-4xl font-bold tracking-tight text-gray-900 underline underline-offset-4"
                    }>
                        Services & Information
                    </h2>
                    <p className="mt-4 text-base font-normal text-gray-500 sm:text-xl">
                        Retrouvez ici toutes les informations concernant les services de Pierrette Essentielle.
                    </p>
                </div>

                <div className="
                    grid
                    grid-cols-1
                    mt-16
                    text-center
                    sm:mt-16
                    gap-x-20
                    gap-y-12
                    sm:grid-cols-2
                    lg:grid-cols-3
                    content-center
                ">
                    {
                        infos.map((info, index) => (
                            <div key={index} className="space-y-4">
                                <span
                                    className={
                                        " inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20"
                                    }>
                                    {info.title}
                                </span>
                                <h3 className="text-xl md:text-2xl font-bold leading-tight text-gray-900">
                                    {info.subTitle}
                                </h3>
                                <p className="text-sm md:text-lg font-normal text-gray-500 ">
                                    {info.text}
                                </p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}