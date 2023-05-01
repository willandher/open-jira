import mongoose from 'mongoose';
import * as process from "process";

/**
 * 0 = disconnected
 * 1 = connected
 * 3 = disconnetec
 */
const mongooConnection = {
    isConnected: 0
}

export const connect = async  () =>{
    if( mongooConnection.isConnected === 1) {
        console.log('Ya estamos conectado')
        return;
    }
    if( mongoose.connections.length > 0){
        mongooConnection.isConnected = mongoose.connections[0].readyState;
        if(mongooConnection.isConnected === 1){
            console.log('Usando conexión anterior');
            return
        }
        await mongoose.disconnect();
    }

    await  mongoose.connect(process.env.MONGO_URL|| '');
    mongooConnection.isConnected = 1;
    console.log('Connected Mongo DB', process.env.MONGO_URL|| '')
}

export const disconnect = async () =>{
    if( process.env.NODE_ENV === 'development')
        return

    if( mongooConnection.isConnected === 0) return;
    await mongoose.disconnect();
    console.log('Desconectando de MongoDB')
}


