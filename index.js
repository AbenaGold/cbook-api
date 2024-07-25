import express from "express";
import { dbconnection } from "./config/db.js";
import contactRouter from "./routes/cbook.js";

// create express app
const app = express();


app.use(express.json());

// use Routes
app.use(contactRouter)

dbconnection();

app.listen(3000, ()=> {
    console.log('app is listening on port 3000');
});