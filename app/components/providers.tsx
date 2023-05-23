import React from "react";
import { Provider } from 'react-redux';
import { store } from "../redux/store";

interface Props {
    children: React.ReactNode
}

export default function Providers(props:Props) {
    return <Provider store={store}>
        {props.children}
    </Provider>
}