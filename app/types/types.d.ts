import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

type ILink = {
    href: string,
    text: string
}

type IImage = {
    src: string,
    alt: string
}

interface Product {
    id: string,
    price: number,
    quantity: number,
}

export interface CartState {
    cart: Product[],
}

export type CartActions = ActionType<typeof actions>;

type IProduct = {
    id: number
    quantity: number
    attributes: any | {
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