import { createSlice, configureStore } from "@reduxjs/toolkit";
import { CartEnums } from "./features/constants";
import { ICart } from "./features/types";

const initialState : ICart = {
    cart: [ ]
}

export function Action(type: CartEnums, payload: any) {
    return { 
        type: type,
        payload: payload
     }
}

interface total {
    totalPrice: number;
    totalQuantity: number;
}
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        // { type: "cart/addToCart", payload: IProduct }
        create: (state, action) => {
            const item = action.payload;

            // Permet de vérifier si le produit est déjà dans le panier
            const product = state.cart.find(x => x.id === item.id);
            // Si le produit est déjà dans le panier, on incrémente la quantité
            if (product) {
                // On incrémente la quantité
                state.cart = state.cart.map(x => x.id === product.id ? { ...product, quantity: product.quantity + 1 } : x);
            } else {
                // Sinon on ajoute le produit au panier
                state.cart = [...state.cart, item];
            }
        },
        // { type: "cart/increment", payload: number }
        remove: (state, action) => {
            const id = action.payload;
            const product = state.cart.find(x => x.id === id);
            if (product) {
                state.cart = state.cart.filter(x => x.id !== id);
            }
        },
        // { type: "cart/updateCart", payload: IProduct }
        update: (state, action) => {
            const item = action.payload;
            const product = state.cart.find(x => x.id === item.id);
            if (product) {
                state.cart = state.cart.map(x => x.id === product.id ? item : x);
            } else {
                state.cart = [...state.cart, item];
            }
        },
        // { type: "cart/clearCart" }
        clear: (state, action) => {
            state.cart = [];
        },
    }
})

export const {
    create,
    remove,
    update, 
    clear 
} = cartSlice.actions;

export const store = configureStore({
    reducer: {
        cart: cartSlice.reducer
    }
})