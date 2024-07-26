import { Router } from "express";
import { addcontact, deleteContact, getallContacts, getContact, updateContact } from "../controllers/cbook.js";

//create a Router
const contactRouter = Router();


// Define Routes
contactRouter.get('/contact', getallContacts );

contactRouter.get('/contact/:id', getContact );

contactRouter.post('/contact', addcontact );

contactRouter.patch('/contact/:id', updateContact );

contactRouter.delete('/contact/:id', deleteContact );


// Export Router
export default contactRouter;