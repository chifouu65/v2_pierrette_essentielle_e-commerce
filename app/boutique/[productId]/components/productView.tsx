import {splitDescription} from "@/app/lib/format";
import AddToCartButton from "@/app/components/buttons/addToCart";

export default function ProductView({product}: any) {

    return (
        <div className="bg-white">
            <div className="pt-6">
                {/* Image gallery */}
                <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
                    <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
                        <img
                            src={process.env.NEXT_PUBLIC_UPLOAD_URL + product.attributes?.img?.data?.attributes?.url}
                            alt={'alt'}
                            className="h-full w-full object-cover object-center"
                        />
                    </div>
                </div>

                {/* Product info */}
                <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
                    <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
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
                        <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                            {
                                (product.attributes.price).toFixed(2)
                            }
                        </h2>
                    </div>

                    <div className="py-2 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
                        {/* Description and details */}
                        <div>
                            <h3 className="sr-only">Description</h3>

                            <div className="space-y-2">
                                {
                                    product.attributes.desc &&
                                    splitDescription(product.attributes.desc).map((desc : string, index : number) => (
                                        <p key={index} className="text-sm text-gray-500">
                                            {desc}
                                        </p>
                                    ))
                                }
                            </div>
                        </div>

                        <div className="mt-10">
                            <h2 className="text-sm font-medium text-gray-900">Details</h2>

                            <div className="mt-4 space-y-6">
                                <p className="text-sm text-gray-600">details</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}