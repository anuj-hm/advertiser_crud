
const { Advertiser } = require('../schema')
const { parseValidation } = require('../helpers/advertiser.helper')
const mongoose = require('mongoose')

const saveAdvertiserData = async (geoData) => {
    try {
        const geo = new Advertiser(geoData)
        const result = await geo.save()
        return { "error": "N", data: result }
    } catch (err) {
        console.log("Error while saving advertiser", err.message, err.name)
        if (err.name === 'ValidationError') {
            const errors = parseValidation(err)
            return { "error": "Y", data: errors, code: 400 }
        }
        return { "error": "Y", data: "Internal server error", code: 500 }
    }
}

const getAll = async () => {
    return await Advertiser.find({}).populate('geo')
}

const getById = async ({ id }) => {
    return await Advertiser.findById(id).populate('geo')
}

const update = async ({ id, data }) => {
    return await Advertiser.findOneAndUpdate({ _id: mongoose.Types.ObjectId(id) }, { $set: data })
}

const remove = async ({ id }) => {
    return await Advertiser.remove({ _id: mongoose.Types.ObjectId(id) })
}

module.exports = {
    saveAdvertiserData,
    getAll,
    getById,
    update,
    remove
}