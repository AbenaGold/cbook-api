import { Router } from "express";
import { addcontact, deleteContact, getContact, getContacts, updateContact } from "../controllers/cbook.js";

//create a Router
const contactRouter = Router();


// Define Routes
contactRouter.get('/contact', getContacts );

contactRouter.get('/contact', getContact );

contactRouter.post('/contact', addcontact );

contactRouter.patch('/contact', updateContact );

contactRouter.delete('/contact', deleteContact );


// Export Router
export default contactRouter;