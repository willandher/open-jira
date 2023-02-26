import {UIState} from "./";

/**
 * Debe poder resolver todo sin salir de esta función
 */

type UIActionType = | {type: 'UI - Open Sidebar'}
| {type: 'UI - Close Sidebar'}
export const uiReducer = ( state: UIState, action: UIActionType): UIState => {



    switch (action.type) {
        case 'UI - Open Sidebar':
            return {
                ... state,
                sidemenuOpen: true
            }
        case 'UI - Close Sidebar':
            return {
                ... state,
                sidemenuOpen: false
            }
        default:
            return  state;
    }
}
