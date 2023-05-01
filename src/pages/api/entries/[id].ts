import type { NextApiRequest, NextApiResponse } from 'next'
import mongoose from "mongoose";
import { db } from '@/database';
import {Entry, IEntry} from "@/models";
type Data = | { message: string }
            | IEntry
            | null

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    // Siempre String
    const {id} = req.query;
    if(!mongoose.isValidObjectId(id)){
        return res.status(400).json({message: `El id no es valido ${id}`})
    }
    switch (req.method) {
        case 'PUT':
            return updateEntry(req, res);
        case 'GET':
            return getEntry(req, res);
        default:
        return  res.status(400).json({message: 'Message no exist'});
    }
    res.status(200).json({ message: 'Example Message' })
}

const updateEntry = async (req: NextApiRequest, res: NextApiResponse<Data>) =>{
    const {id} = req.query;
    await db.connect();
    const entryToUpdate = await Entry.findById(id);
    if(!entryToUpdate){
        await db.disconnect();
        return res.status(400).json({message: 'No hay entrada de ese Id: '+ id});
    }
    const {
        description = entryToUpdate.description,
        status = entryToUpdate.status
    } = req.body;
    const updateEntry = await Entry.findByIdAndUpdate(id, {description, status}, {runValidators: true, new: true})
    await db.disconnect();
    res.status(200).json(updateEntry)
}
const getEntry = async (req: NextApiRequest, res: NextApiResponse<Data>) =>{
    const {id} = req.query;
    await db.connect();
    const entryToGet = await Entry.findById(id);
    if(!entryToGet){
        await db.disconnect();
        return res.status(400).json({message: 'No hay entrada de ese Id: '+ id});
    }
    await db.disconnect();
    res.status(200).json(entryToGet)
}
