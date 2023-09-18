import React, { useState } from "react";

import { ModalCartContext } from "./ModalCartContext";
import { ModalCart } from "../../components";

export const ModalCartProvider = ({ children }: any) => {
    const [modalCartOpened, setModalCartOpened] = useState(false);
    
    const openModalCart = () => {
        setModalCartOpened(true);
    }

    const closeModalCart = () => {
        setModalCartOpened(false);
    }

    const valueModalProvider = {
        openModalCart,
        closeModalCart
    }

    return (
        <ModalCartContext.Provider value={valueModalProvider}>
            {modalCartOpened && <ModalCart isModalCartOpened={modalCartOpened}/>}
            { children }
        </ModalCartContext.Provider>
    )
}