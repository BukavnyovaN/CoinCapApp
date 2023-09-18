import React, { useState } from "react";

import { ModalWindowContext } from "./ModalWindowContext";
import { ModalWindow } from "../../components";

export const ModalWindowProvider = ({ children }: any) => {
    const [modalWindowOpened, setModalWindowOpened] = useState(false);
    
    const openModalWindow = () => {
        setModalWindowOpened(true);
    }

    const closeModalWindow = () => {
        setModalWindowOpened(false);
    }

    const valueModalProvider = {
        openModalWindow,
        closeModalWindow
    }

    return (
        <ModalWindowContext.Provider value={valueModalProvider}>
            {modalWindowOpened && <ModalWindow isModalWindowOpen={modalWindowOpened}/>}
            { children }
        </ModalWindowContext.Provider>
    )
}