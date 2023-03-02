import React, {FC, useReducer} from "react";
import {EntriesContext, entriesReducer} from "./";
import {Entry} from "@/interfaces";
// @ts-ignore
import {v4 as uuidv4} from 'uuid';

export interface EntriesState {
    entries: Entry[];
    children?: React.ReactNode
}

const ENTRIES_INITIAL_STATE: EntriesState = {
    entries: [
        {
            _id: uuidv4(),
            description: "testing en el log",
            status: "pending",
            createAt: Date.now()
        }, {
            _id: uuidv4(),
            description: "testing en el log in probress",
            status: "in-progress",
            createAt: Date.now() - 1000222
        }, {
            _id: uuidv4(),
            description: "testing en el log terminada",
            status: "finished",
            createAt: Date.now() - 12333233
        }
    ]
}



export const EntriesProvider: FC<EntriesState> = ({children}) => {
    const [state, dispatch] = useReducer(entriesReducer, ENTRIES_INITIAL_STATE);


    const updateEntry = (entry: Entry) =>{
        dispatch({type: '[Entry] Entry-Updated', payload: entry})
    }

    const addNewEntry = (description: string) =>{
        const newEntry: Entry = {
            _id: uuidv4(),
            createAt: Date.now(),
            description,
            status: 'pending'
        }
        dispatch({type: '[Entry] Add-Entry', payload: newEntry})
    }
    return (
        <EntriesContext.Provider value={{
            ...state,
            addNewEntry,
            updateEntry
        }}>
            {children}
        </EntriesContext.Provider>
    );
};
