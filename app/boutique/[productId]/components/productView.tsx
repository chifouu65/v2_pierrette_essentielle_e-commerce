import {splitDescription} from "@/app/lib/format";
import AddToCartButton from "@/app/components/buttons/addToCart";
import Image from "next/image";

export default function ProductView({product}: any) {

    return (
        <div className="bg-white justify-center items-center ">
            <div className="pt-6">
                {/* Image gallery */}
                <div className="max-w-sm mt-6 mx-auto rounded-lg max-h-1/2">
                    <Image
                        src={process.env.NEXT_PUBLIC_UPLOAD_URL + product.attributes?.img?.data?.attributes?.url}
                        alt={'alt'}
                        width={product.attributes?.img?.data?.attributes?.width}
                        height={product.attributes?.img?.data?.attributes?.height}
                    />
                </div>
                {/* Product info */}
                <div className="mx-auto max-w-2xl pb-16 pt-10 lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
                    <div className="lg:col-span-2 lg:pr-8">
                        <h1 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                            {product.attributes.title}
                        </h1>
                        <AddToCartButton
                            data={
                                {
                                    product: product,
                                    quantity: 1
                                }
                            }
                        />
                        <h2 className="mt-4 text-xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                            {
                                (product.attributes.price).toFixed(2)
                            }€
                        </h2>
                    </div>

                    <div className="py-2 lg:col-span-2 lg:col-start-1 lg:pb-16 lg:pr-8 lg:pt-6">
                        {/* Description and details */}
                        <div>
                            <div className="space-y-2">
                                {
                                    product.attributes.desc &&
                                    splitDescription(product.attributes.desc).map((desc : string, index : number) => (
                                        <p key={index} className="text-gray-600">
                                            {desc}
                                        </p>
                                    ))
                                }
                            </div>
                        </div>

                        <div className="mt-10">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}