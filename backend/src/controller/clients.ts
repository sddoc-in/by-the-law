import { Request, Response } from 'express';
import { Collection, Db } from 'mongodb';
import connectToCluster from '../connection/connect';
import ConnectionRes from '../interface/ConnectionRes';
import { validateSession } from '../functions/hash';
import { validateToken } from '../functions/bearer';


export async function getAllClients(req: Request, res: Response) {
    const session = req.query.session as string;
    const cid = req.query.cid as string;
    const token = req.query.token as string;

    try {
        if (session === undefined) {
            return res.status(400).json({ message: 'Session required' });
        }
        if (cid === undefined) {
            return res.status(400).json({ message: 'Cid required' });
        }
        if (token === undefined) {
            return res.status(400).json({ message: 'Token required' });
        }

        // create connection
        const connect: ConnectionRes = await connectToCluster();
        if (typeof connect.conn === 'string') {
            return res.status(500).json(connect);
        }
        const conn = connect.conn;
        const db: Db = conn.db('client');
        const clientsCollection: Collection = db.collection("clients");
        const sessionCollection: Collection = db.collection('sessions');

        // check session
        let sessionBool = validateSession(session);
        if (sessionBool) {
            return res.status(400).json({ message: 'Invalid session' });
        }
        let tokenErr = validateToken(token);
        if (tokenErr !== '') {
            return res.status(400).json({ message: tokenErr });
        }

        // insert session
        await sessionCollection.insertOne({
            activity: 'get-all-clients',
            session: session,
            uid: cid,
            created: new Date()
        });

        //get all clients
        let clients = await clientsCollection.find(
            {
                projection: {
                    username: 1,
                    email: 1,
                    cid: 1,
                    status: 1,
                    created: 1
                }
            },).toArray();
        return res.status(200).json(clients);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Unknown error' });
    }
}




export async function getClient(req: Request, res: Response) {
    const session = req.query.session as string;
    const cid = req.query.cid as string;
    const clientid = req.query.clientid as string;
    const token = req.query.token as string;

    try{
        if (session === undefined) {
            return res.status(400).json({ message: 'Session required' });
        }
        if (cid === undefined) {
            return res.status(400).json({ message: 'Cid required' });
        }
        if (clientid === undefined) {
            return res.status(400).json({ message: 'Clientid required' });
        }
        if (token === undefined) {
            return res.status(400).json({ message: 'Token required' });
        }

        // create connection
        const connect: ConnectionRes = await connectToCluster();
        if(typeof connect.conn === 'string'){
            return res.status(500).json(connect);
        }

        const conn = connect.conn;
        const db: Db = conn.db('client');
        const clientsCollection: Collection = db.collection('clients');
        const sessionCollection: Collection = db.collection('sessions');

        // check session
        let sessionBool = validateSession(session);
        if (sessionBool) {
            return res.status(400).json({ message: 'Invalid session' });
        }
        let tokenErr = validateToken(token);
        if (tokenErr !== '') {
            return res.status(400).json({ message: tokenErr });
        }
        
        // insert session
        await sessionCollection.insertOne({
            activity: 'get-client',
            session: session,
            uid: cid,
            created: new Date()
        });

        let client = await clientsCollection.findOne(
            {cid: clientid},
            {
                projection: {
                    username: 1,
                    email: 1,
                    cid: 1,
                    status: 1,
                    created: 1
                }
            }
        );
        return res.status(200).json(client);
    }catch(error){
        console.log(error);
        return res.status(500).json({message: 'Unknown error'});
    }
}





export async function updateClient(req: Request, res: Response) {
    const session = req.body.session as string;
    const cid = req.body.cid as string;
    const clientid = req.body.clientid as string;
    const token = req.body.token as string;
    const name = req.body.name as string;
    const username = req.body.username as string;
    const email = req.body.email as string;
    const Lawyer = req.body.Lawyer as string;
    const status = req.body.status as string;

    try{
        if(session === undefined){
            return res.status(400).json({message: 'Session required'});
        }
        if(cid === undefined){
            return res.status(400).json({message: 'Cid required'});
        }   
        if(clientid === undefined){
            return res.status(400).json({message: 'Clientid required'});
        }
        if(token === undefined){
            return res.status(400).json({message: 'Token required'});
        }   
        if(name === undefined){
            return res.status(400).json({message: 'Name required'});
        }
        if(username === undefined){
            return res.status(400).json({message: 'Username required'});
        }
        if(email === undefined){
            return res.status(400).json({message: 'Email required'});
        }
        if(Lawyer === undefined){
            return res.status(400).json({message: 'Lawyer required'});
        }
        if(status === undefined){
            return res.status(400).json({message: 'Status required'});
        }

        //create connection
        const connect: ConnectionRes = await connectToCluster();
        if(typeof connect.conn === 'string'){
            return res.status(500).json(connect);
        }
        const conn = connect.conn;
        const db: Db = conn.db('client');
        const clientsCollection: Collection = db.collection('clients');
        const sessionCollection: Collection = db.collection('sessions');

        //check session
        let sessionbool = validateSession(session);
        if(sessionbool){
            return res.status(400).json ({message: 'Invalid session'});
        }
        let tokenErr = validateToken(token);
        if(tokenErr !== ''){
            return res.status(400).json({message: tokenErr});
        }
        let tempClient = await clientsCollection.findOne({ cid: clientid });
        if(!tempClient){
            return res.status(400).json({message: 'Client not found'});
        }

        tempClient = await clientsCollection.findOne(
            { username: username },
            { projection: { username: 1 , cid:1 } }
            );
           if(
            tempClient !== null &&
            tempClient.cid !== clientid &&
            tempClient.cid !== clientid
           ) {
            return res.status(400).json({message: 'Clientname already taken'});
           }

           tempClient  = await clientsCollection.findOne(
            { email: email },  
            { projection: { email: 1, cid: 1 } } 
           );
           if(
            tempClient !== null &&
            tempClient.cid !== clientid
           ) {
            return res.status(400).json({message: 'Email already taken'});
           }
           
           //insert session
           await sessionCollection.insertOne({
            activity: 'update-client',
            session: session,
            cid: cid,
            created: new Date()
           });

           let user = await clientsCollection.findOne({cid: clientid});
           if(!user){
               return res.status(400).json({message: 'Client not found'});
           }

           let updatedClient = await clientsCollection.updateOne({
            cid:clientid
           },
              {
                $set: {
                 name: name,
                 username: username,
                 email: email,
                 Lawyer: Lawyer,
                 status: status
                }
              });
              return res.status(200).json({message: 'Client updated'});
    }catch (error) {
        console.log(error);
        return res.status(500).json({message: 'Unknown error'});
    }
}





export async function deleteClient(req: Request, res: Response) {
    const session = req.query.session as string;
    const cid = req.query.cid as string;
    const clientid = req.query.clientid as string;
    const token = req.query.token as string;

    try{
        if(session === undefined){
            return res.status(400).json({message: 'Session required'});
        }
        if(cid === undefined){
            return res.status(400).json({message: 'Cid required'});
        }   
        if(clientid === undefined){
            return res.status(400).json({message: 'Clientid required'});
        }
        if(token === undefined){
            return res.status(400).json({message: 'Token required'});
        }   

        //create connection
        const connect: ConnectionRes = await connectToCluster();
        if(typeof connect.conn === 'string'){
            return res.status(500).json(connect);
        }
        const conn = connect.conn;
        const db: Db = conn.db('client');
        const clientsCollection: Collection = db.collection('clients');
        const sessionCollection: Collection = db.collection('sessions');

        //check session
        let sessionbool = validateSession(session);
        if(sessionbool){
            return res.status(400).json ({message: 'Invalid session'});
        }
        let tokenErr = validateToken(token);
        if(tokenErr !== ''){
            return res.status(400).json({message: tokenErr});
        }

        //insert session
        await sessionCollection.insertOne({
            activity: 'delete-client',
            session: session,
            cid: cid,
            created: new Date()
        });

        let client = await clientsCollection.findOne({cid: clientid});
        if(!client){
            return res.status(400).json({message: 'Client not found'});
        }

        await clientsCollection.deleteOne({cid: clientid});
        return res.status(200).json({message: 'Client deleted'});
    }catch(error){
        console.log(error);
        return res.status(500).json({message: 'Unknown error'});
    }
}