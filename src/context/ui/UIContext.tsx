import {createContext} from "react";

interface ContextProps {
    sidemenuOpen: boolean | undefined;
    openSideMenu: () => void;

    closeSideMenu: () => void;

}
export const UIContext = createContext({} as ContextProps);
