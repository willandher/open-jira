import React, {FC, useEffect, useReducer} from "react";
import {EntriesContext, entriesReducer} from "./";
import {Entry} from "@/interfaces";
import EntriesApi from "@/apis/entriesApi";
import {entriesApi} from "@/apis";

export interface EntriesState {
    entries: Entry[];
    children?: React.ReactNode
}

const ENTRIES_INITIAL_STATE: EntriesState = {
    entries: []
}



export const EntriesProvider: FC<EntriesState> = ({children}) => {
    const [state, dispatch] = useReducer(entriesReducer, ENTRIES_INITIAL_STATE);
    const refreshEntries = async () =>{
     const {data} = await EntriesApi.get<Entry[]>('/entries');
     dispatch({ type:'[Entry] Refresh-Data', payload: data})
    }
    useEffect(() => {
      refreshEntries();
    }, [])
    const updateEntry = async ({_id, description, status}: Entry) =>{
        try{
            const {data} = await entriesApi.put<Entry>(`/entries/${_id}`,{description, status})
           dispatch({type: '[Entry] Entry-Updated', payload: data})

        }catch (error){
            console.log({error})
        }
    }

    const addNewEntry = async (description: string) => {
        const {data} = await entriesApi.post<Entry>('/entries', { description });
        dispatch({type: '[Entry] Add-Entry', payload: data})
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
