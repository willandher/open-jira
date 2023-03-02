import {createContext} from "react";

interface ContextProps {
    sidemenuOpen: boolean | undefined;
    isAddingEntry: boolean | undefined;

    isDragging: boolean

    openSideMenu: () => void;


    closeSideMenu: () => void;

    setIsAddingEntry: (isAdding: boolean) => void;

    endDragging: () => void;

    startDragging: () => void;

}
export const UIContext = createContext({} as ContextProps);
