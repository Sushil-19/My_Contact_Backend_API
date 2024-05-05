const express = require('express');
const {getContact, getOneContact,postContact,putContact,deleteContact} = require('../controller/controller');
const router = express.Router();

router.route('/').get(getContact).post(postContact);
router.route('/:id').get(getOneContact).put(putContact).delete(deleteContact);

module.exports = router;