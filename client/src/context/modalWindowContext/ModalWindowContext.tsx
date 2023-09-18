import { createContext } from "react";

export const ModalWindowContext = createContext({
    openModalWindow: () => {},
    closeModalWindow: () => {}
})