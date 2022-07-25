// ROUTER
const router = require('express').Router();

// CONTROLLERS
const { listAllClients, createClient, getClient, sendSMS, SMSHistory } = require('../controller/client');

// ROUTES
router.route('/clients').get(listAllClients);
router.route('/createclient').post(createClient);
router.route('/client/:id').get(getClient);
router.route('/client/sendsms').post(sendSMS)
router.route('/sms/history').get(SMSHistory)


module.exports = router;
