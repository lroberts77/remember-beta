import express from "express";
import bodyParser from 'body-parser';
import mongoose from "mongoose";
import cors from "cors";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://liammongo77:<password>@cluster0.iql76.mongodb.net/<dbname>?retryWrites=true&w=majority'

// https://www.mongodb.com/cloud/atlas

