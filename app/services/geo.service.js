
const { Geo } = require('../schema')
const { parseValidation } = require('../helpers/advertiser.helper')
const mongoose = require('mongoose')

const saveGeoData = async (geoData) => {
    try {
        const geo = new Geo(geoData)
        const result = await geo.save()
        return { "error": "N", data: result }
    } catch (err) {
        console.log("Error while saving geo", err.message)
        if (err.name === 'ValidationError') {
            const errors = parseValidation(err)
            return { "error": "Y", data: errors, code: 400 }
        }
        return { "error": "Y", data: "Internal server error", code: 500 }
    }
}

const update = async ({ id, data }) => {
    return await Geo.findOneAndUpdate({ _id: mongoose.Types.ObjectId(id) }, { $set: data })
}

const remove = async ({ id }) => {
    return await Geo.remove({ _id: mongoose.Types.ObjectId(id) })
}

module.exports = {
    saveGeoData,
    update,
    remove
}