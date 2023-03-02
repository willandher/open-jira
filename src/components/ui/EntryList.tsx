import {List, Paper} from "@mui/material";
import {EntryCard} from "@/components/ui/EntryCard";
import {EntryStatus} from "@/interfaces";
import {DragEvent, FC, useContext, useMemo} from "react";
import {EntriesContext} from "@/context/entries";
import {UIContext} from "@/context/ui";
import styles from './EntryList.module.css'
interface Props {
    status: EntryStatus;
}
export const EntryList:FC<Props> = ( {status}) => {
        const {entries, updateEntry} = useContext(EntriesContext);
        const {isDragging, endDragging} = useContext(UIContext);
    /**
     * Revisar el useMemo
     */
    const entriesByStatus = useMemo(()=> entries.filter(entry => entry.status === status), [entries]);

    const onDropEntry = (event: DragEvent) =>{
        const id = event.dataTransfer.getData('text');
        const entry = entries.find(entry => entry._id === id)!;
        entry.status = status;
        updateEntry(entry);
        endDragging()
    }
    const allowDrop = (event: DragEvent) =>{
        event.preventDefault();
    }

    return (
        // aqui haremos drop
        <div
        onDrop={onDropEntry}
        onDragOver={allowDrop}
        className={isDragging ? styles.dragging: ''}
        >
           <Paper sx={{ height: 'calc(100vh - 250px)', overflow: 'scroll', backgroundColor: 'transparent', padding: '1px 5px'}}>
               {/* cambiara dependiendo de lal drag*/}
               <List sx={{ opacity: isDragging ? 0.2: 1, transition: 'all .3s'}}>

                   {entriesByStatus.map((entry, index) =>(
                            <EntryCard key={entry._id} entry={entry}/>

                   ))}

               </List>
           </Paper>
        </div>
    );
};

