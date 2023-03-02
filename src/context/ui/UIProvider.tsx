import React, {FC, useReducer} from "react";
import {UIContext, uiReducer} from "./";

export interface UIState {
    sidemenuOpen?: boolean;

    isAddingEntry?: boolean;
    children?: React.ReactNode;
    isDragging: boolean;
}

const UI_INITIAL_STATE: UIState = {
    sidemenuOpen: false,
    isAddingEntry: false,
    isDragging: false
}


export const UIProvider: FC<UIState> = ({children}  ) => {
    const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);
    const openSideMenu = () =>{
        dispatch({type: 'UI - Open Sidebar'})
    }

    const closeSideMenu = () =>{
        dispatch({type: 'UI - Close Sidebar'})
    }
    const setIsAddingEntry = (isAdding: boolean) =>{
        dispatch({type: 'UI - Set Is Adding Entry', payload: isAdding})
    }

    const startDragging = () =>{
        dispatch({type:'UI - Start Dragging'})
    }

    const endDragging = () =>{
        dispatch({type:'UI - End Dragging'})
    }

    return (
        <UIContext.Provider value={{
            sidemenuOpen: state.sidemenuOpen,
            isAddingEntry: state.isAddingEntry,
            isDragging: state.isDragging,
            openSideMenu,
            closeSideMenu,
            setIsAddingEntry,
            startDragging,
            endDragging

        }}>
            {children}
        </UIContext.Provider>
    );
};
