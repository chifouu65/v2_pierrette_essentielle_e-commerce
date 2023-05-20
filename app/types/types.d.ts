type ILink = {
    href: string,
    text: string
}

type IImage = {
    src: string,
    alt: string
}

type IProduct = {
    id: number
    attributes: {
        title: string
        categories: {
            data: {
                id: number
                attributes: {
                    desc: string
                    title: string
                }
            }
        }
        sub_categories: {
            data: {
                id: number
                attributes: {
                    title: string
                }
            }
        }
        desc: string
        img: {
            data : {
                id: number
                attributes: {
                    url: string
                }
            }
        }
        img2: string
        isNew: boolean
        price: number
        publishedAt: string
        solde: any | string
        type: string
    }
}