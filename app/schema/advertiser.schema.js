
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const advertiserSchema = new Schema({
    token: {
        type: String,
        required: true
    },
    device: {
        type: String,
        required: true
    },
    geo: {
        type: Schema.ObjectId,
        ref: 'geo'
    },
    file: {
        type: String,
        required: true
    },
    originalFile: {
        type: String,
        required: true
    },
    advertiser: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    ip: {
        type: String,
        required: true
    },
    accountId: {
        type: String,
        required: true
    },
    tagline: {
        type: String,
        required: true
    },
    recordTime: {
        type: String,
        required: true
    },
    cta: {
        type: String,
        required: true
    },
}, { timestamps: true })

const AdvertiserSchema = mongoose.model('advertiser', advertiserSchema)

module.exports = AdvertiserSchema