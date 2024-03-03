export default interface Client {
    cid:string;
    name: string;
    username: string;
    email: string;
    password: string;
    access_token?: string;
    session?: string;
    provider?: string;
    Lawer?: string;
    status: string;
    created?: Date;
}