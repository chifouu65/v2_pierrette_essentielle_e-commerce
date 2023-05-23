'use client'
import useApi from "@/app/hooks/useApi";
import { IProduct } from "@/app/types/types";
import Link from "next/link";

export default function ProductList({ maxPrice, selectedSubCategory } : {
    maxPrice: number
    selectedSubCategory: never[]
}) {
    const {data, loading, error} = useApi(
        `/products?populate=*&[filters][categories][id]=2${selectedSubCategory.map(
            (item) => `&[filters][sub_categories][id][$eq]=${item}`
        )}&[filters][price][$lte]=${maxPrice}&sort=price`
    );

    if (!loading && data !== null && !error) {
        return (
            <div className="bg-white">
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <h2 className="sr-only">Products</h2>
                    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                        {
                            data.map((product: IProduct) => (
                                    <Link key={product.id} href={`/boutique/${product.id}`} className="group">
                                        <div className="aspect-h-2 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-12 xl:aspect-w-7">
                                            <img
                                                src={process.env.NEXT_PUBLIC_UPLOAD_URL + product.attributes?.img?.data?.attributes?.url}
                                                alt={'image product'}
                                                className="h-full w-full object-cover object-center group-hover:opacity-75"
                                            />
                                        </div>
                                        <h3 className="mt-4 text-sm text-gray-700">{product.attributes.title}</h3>
                                        <p className="mt-1 text-lg font-medium text-gray-900">{(product.attributes.price).toFixed(2)}€</p>
                                    </Link>
                            ))
                        }
                    </div>
                </div>
            </div>
        )
    }
}
