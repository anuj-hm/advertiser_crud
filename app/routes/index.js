/**
 * @name: index.route.js
 * @description: Exports routes for all the service
 * @author: Anuj Gupta
 */

const express = require('express')
const router = express.Router({ mergeParams: true })

router.use('/advertiser', require('./advertiser.route'))



module.exports = router