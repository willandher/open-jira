import {ChangeEvent, useContext, useState} from "react";
import {Box, Button, TextField} from "@mui/material";
import SaveAsOutlinedIcon from '@mui/icons-material/SaveAsOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import {EntriesContext} from "@/context/entries";
import {UIContext} from "@/context/ui";

export const NewEntry = () => {

    const [inputValue, setInputValue] = useState('');
    const [touched, setTouched] = useState(false);
    const {addNewEntry} = useContext(EntriesContext);
    const {isAddingEntry, setIsAddingEntry} = useContext(UIContext);
    const onTextFieldChanged = (event: ChangeEvent<HTMLInputElement>) =>{
        setInputValue(event.target.value);
    }

    const onSave = () =>{
        if(inputValue.length === 0) return;
        addNewEntry(inputValue);
        setIsAddingEntry(false);
        setTouched(false);
        setInputValue('');
    }

    return (
        <>
            {isAddingEntry ? <>
                <Box sx={{
                    marginBottom: 2, paddingX: 2
                }}>
                    <TextField fullWidth
                               sx={{marginTop: 2, marginBottom: 1}}
                               placeholder='Nueva Entrada'
                               autoFocus
                               multiline
                               label='Nueva Entrada'
                               helperText={inputValue.length <=0 && touched && 'Ingrese un valor'}
                               error={inputValue.length <=0 && touched}
                                value={inputValue}
                               onChange={onTextFieldChanged}
                               onBlur={()=>setTouched(true)}
                    />
                    <Box display='flex' justifyContent='space-between'>
                        <Button variant='text' color='secondary' onClick={() => setIsAddingEntry(false)}>
                            Cancelar
                        </Button>
                        <Button variant='outlined' color='secondary' endIcon={<SaveAsOutlinedIcon/>} onClick={onSave}>
                            Guardar
                        </Button>
                    </Box>
                </Box>
            </> : <>
                <Button startIcon={<AddCircleOutlineOutlinedIcon/>}
                        fullWidth
                        variant='outlined' onClick={() => setIsAddingEntry(true)}>
                    Agregar Tarea
                </Button>
            </>}

        </>
    );
};

