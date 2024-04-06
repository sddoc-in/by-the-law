import express from "express";
import { register } from "../controller/register";
import { login } from "../controller/login";
import { deleteURL, generateURL, getURLs, validateURL } from "../controller/generate-url";
import {
  addCredentials,
  getCredentials,
  getPlatformCredentials,
} from "../controller/credentials";
import { deleteUser, getAllUsers, getUser, updateUser } from "../controller/users";
import { createClient, deleteClient, getAllClients, getClient, updateClient } from "../controller/clients";


const router = express.Router();

router.post("/api/register", register);
router.get("/api/login", login);

// lawyers
router.get("/api/lawyers/all", getAllUsers);
router.get("/api/laywer/details", getUser);
router.put("/api/lawyer/update", updateUser);
router.delete("/api/lawyer/delete", deleteUser);
router.post("/api/lawyer/create", register);

// clients
router.get("/api/clients/all",getAllClients);
router.get("/api/client/details",getClient);
router.put("/api/client/update",updateClient);
router.delete("/api/client/delete",deleteClient);
router.post("/api/client/create",createClient);

// urls
router.get("/api/url/generate", generateURL);
router.get("/api/url/validate", validateURL);
router.get("/api/url/delete", deleteURL);

router.get("/api/get-all-urls",getURLs)
router.get("/api/get-all-credentials", getCredentials);
router.post("/api/save-credentials", addCredentials);
router.get("/api/get-credentials", getPlatformCredentials);
export default router;
