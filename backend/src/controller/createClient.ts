import { v4 } from 'uuid';
import ConnectionRes from '../interface/ConnectionRes';
import connectToCluster from '../connection/connect';
import { Collection, Db } from 'mongodb';
import { Request, Response } from 'express';
import registerValidate from '../functions/registerValidate';
import RegisterError from '../interface/RegisterError';
import Client from '../interface/Client';
import { createSession, hash, validateSession } from '../functions/hash';
import { createBearer, validateToken } from '../functions/bearer';
import { closeConn } from '../connection/closeConn';

export async function createClient(req: Request, res: Response) {

    const { name, username, email, password, status, access_token, session, cid } =
     req.body;

     try{
        if(name === undefined){
            return res.status(400).json({message: "Name required"})
        }
        if(username === undefined){
            return res.status(400).json({message: "Username required"})
        }
        if(email === undefined){
            return res.status(400).json({message: "Email required"})
        }
        if(password === undefined){
            return res.status(400).json({message: "Password required"})
        }

        //create connection
        const connect: ConnectionRes = await connectToCluster();
        if(typeof connect.conn === "string"){
            return res.status(500).json(connect);
        }

        const conn = connect.conn;
        const db: Db = conn.db("client");
        const collection: Collection = db.collection("clients");
        const sessionCollection: Collection = db.collection("sessions"); 
        
        //check if already exists
        const filteredDocs = await collection.find({email: email}).toArray();
        if(filteredDocs.length > 0){
            return res.status(400).json({
                errors: {
                    message: "Email already exists"
                },
                email: email
            });
        }

        //check for errors
        let errors: RegisterError | undefined = {} as RegisterError;
        errors = registerValidate(username, email, password, name).errors;
        if(errors && Object.keys(errors).length > 0){
            return res.status(400).json({
                errors: errors,
                message: "Invalid input(s)"
            });
        }

        //check session
        let sessionBool = validateSession(session);
        if(sessionBool){
            return res.status(401).json({message: "Session invalid"});
        }

        let tokenErr = validateToken(access_token);
        if(tokenErr !== ""){
            return res.status(401).json({message: tokenErr});
        }

        //create client if everything is valid
        let cidNew = v4();

        // create session
        let sessionNew = createSession();

        await sessionCollection.insertMany([
            {
                session: session,
                cid:cid,
                created: new Date()
            },
            {
                session: sessionNew,
                cid:cidNew,
                created: new Date()
            }
        ]);

        //create generate new token

        const token = createBearer(email,cidNew, sessionNew); 

        const client: Client = {
            cid: cidNew,
            name: name,
            username: username,
            email: email,
            password: hash(password),
            access_token: token,
            session: sessionNew,
            status: "active",
            created: new Date()
        }

        await collection.insertOne(client);

        closeConn(conn);
        const tmpClient = {
            cid: client.cid,
            name: client.name,
            access_token: client.access_token,
            session: client.session, 
        };
        res
        .status(201)
        .json({client: tmpClient,message:"Client created successfully"});

     }catch(err){
            console.log(err);
            return res.status(500).json({message: "Internal server error"});
     }

}