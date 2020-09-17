
/**
 * @name: advertiser.route.js
 * @author: Anuj Gupta
 * @description: Expose routes for advertiser
 */

const express = require('express')
const { advertiser } = require('../controllers')

const router = express.Router()

router.post('', advertiser.create)
router.get('', advertiser.getAll)
router.get('/:id', advertiser.get)
router.patch('/:id', advertiser.update)
router.delete('/:id', advertiser.remove)

module.exports = router