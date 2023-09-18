import { createContext } from "react";

export const ModalCartContext = createContext({
    openModalCart: () => {},
    closeModalCart: () => {}
})