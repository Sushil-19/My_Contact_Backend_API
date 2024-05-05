const Contact = require('../models/contactmodels');

const asyncHandler = require('express-async-handler');
const getContact = asyncHandler(async (req, res)=>{
    const contact = await Contact.find();
    res.json(contact);
});
const getOneContact = asyncHandler(async (req, res)=>{
    const contact = await Contact.findById(req.params.id);
    if (!contact){
        res.status(404);
        throw new Error("Contact not found");
    }

    res.send(contact);
});
const postContact = asyncHandler(async (req, res)=>{
    console.log("request body is : ",req.body);
    const {name, email, phone} = req.body;
    if (!name || !email || !phone){
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    const contact = await Contact.create({
        name,email,phone
    });
    res.send(contact);
});
const putContact = asyncHandler(async (req, res)=>{
    res.send(`update contact for ${req.params.id}`);
});
const deleteContact = asyncHandler(async (req, res)=>{
    res.send(`Deleted contact with id ${req.params.id}`);
});
module.exports = {getContact, getOneContact,postContact,putContact,deleteContact};