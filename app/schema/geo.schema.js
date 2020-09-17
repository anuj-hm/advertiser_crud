
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const geoSchema = new Schema({
    continentCode: {
        type: String,
        required: true
    },
    continentName: {
        type: String,
        required: true
    },
    countryCode: {
        type: String,
        required: true
    },
    countryName: {
        type: String,
        required: true
    },
    regionCode: {
        type: String,
        required: true
    },
    regionName: {
        type: String,
        required: true
    },
})

const GeoSchema = mongoose.model('geo', geoSchema)

module.exports = GeoSchema