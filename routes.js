const express = require('express');
const api = express.Router();
const controller = require('./conversation-controller');

api.post("/conv/:convid/tempdoc/:docid", controller.saveConversation);

module.exports = api;