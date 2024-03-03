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
import { deleteClient, getAllClients, getClient, updateClient } from "../controller/clients";
import { createClient } from "../controller/createClient";

const router = express.Router();

router.post("/api/register", register);
router.get("/api/login", login);
router.get("/api/generate-url", generateURL);
router.get("/api/validate-url", validateURL);
router.get("/api/delete-url", deleteURL);
router.get("/api/get-all-urls",getURLs)
router.get("/api/get-all-credentials", getCredentials);
router.post("/api/save-credentials", addCredentials);
router.get("/api/get-credentials", getPlatformCredentials);
router.get("/api/get-all-users", getAllUsers);
router.get("/api/get-user", getUser);
router.post("/api/update-user", updateUser);
router.post("/api/delete-user", deleteUser);
router.get("/api/get-all-clients",getAllClients);
router.get("/api/get-client",getClient);
router.get("/api/update-client",updateClient);
router.get("/api/delete-client",deleteClient);
router.get("/api/create-client",createClient);
export default router;
