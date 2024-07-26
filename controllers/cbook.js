import { ContactModel } from "../models/cbook.js";

//  Get All contacts
export const getallContacts = async (req, res, next) => {
    try {
        const allcontacts = await ContactModel.find()
        res.status(200).json(allcontacts)
    } catch (error) {
        next(error)
    }
};

// Get a Contact
export const getContact = async (req, res, next) => {
    try {
        const contact = await ContactModel.findById(req.params.id)
        res.status(200).json(contact)
    } catch (error) {
        next(error)
    }
}



//Add a contact
export const addcontact = async (req, res, next) => {
    try {
        const addedcontact = await ContactModel.create(req.body)
        res.status(201).json(addedcontact)
    } catch (error) {
        next(error)
    }
};

//Update a Contact
export const updateContact = async (req, res, next) => {
    try {
        const contactId = req.params.id;
        const updatedContact = await ContactModel.findByIdAndUpdate(
            { _id: contactId },
            req.body,
            { new: true })

        res.status(200).json(updatedContact)
    } catch (error) {
        next(error)
    }
};

//Delete a contact
export const deleteContact = async (req, res, next) => {
    try {
        const deletedContact = await ContactModel.findByIdAndDelete(req.params.id)
        res.status(200).json(deletedContact)
    } catch (error) {
        next(error)
    }
}

