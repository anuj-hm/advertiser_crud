

const { advertiserService, geoService } = require("../services")

const { parseReqData } = require("../helpers/advertiser.helper")

const create = async (req, res) => {
    const { body } = req
    const { advertiserData, geoData } = parseReqData(body)
    try {
        const geoResult = await geoService.saveGeoData(geoData)
        if (geoResult.error === "Y") {
            const { code, ...rspResult } = geoResult
            return res.status(code).send(rspResult)
        }
        advertiserData.geo = geoResult.data._id
        const advertiserResult = await advertiserService.saveAdvertiserData(advertiserData)
        if (advertiserResult.error === "Y") {
            const { code, ...rspResult } = advertiserResult
            return res.status(code).send(rspResult)
        }
        return res.status(200).send({ error: "N", message: "Advertiser created successfully" })
    } catch (error) {
        console.log("Error while creation", error)
        return res.status(500).send({ error: "Y", message: "Internal server error" })
    }
}


const get = async (req, res) => {
    const { id } = req.params
    try {
        const result = await advertiserService.getById({ id })
        if (!result) {
            return res.status(400).send({ error: "Y", message: "Invalid id" })
        }
        return res.status(200).send({ error: "N", data: result })
    } catch (error) {
        console.log("Error while get advertiser", error)
        return res.status(500).send({ error: "Y", message: "Internal server error" })
    }
}


const getAll = async (req, res) => {
    try {
        const result = await advertiserService.getAll()
        return res.status(200).send({ error: "N", data: result })

    } catch (error) {
        console.log("Error while get all advertiser", error)
        return res.status(500).send({ error: "Y", message: "Internal server error" })
    }
}


const update = async (req, res) => {
    const { id } = req.params
    const { advertiserData, geoData } = parseReqData(req.body)
    try {
        const result = await advertiserService.getById({ id })
        if (!result) {
            return res.status(400).send({ error: "Y", message: "Invalid id" })
        }
        if (Object.keys(advertiserData).length > 0) {
            await advertiserService.update({ id, data: advertiserData })
        }
        if (Object.keys(geoData).length > 0) {
            await geoService.update({ id: result.geo._id, data: geoData })
        }
        return res.status(200).send({ error: "N", message: "Advertiser updated successfully" })
    } catch (error) {
        console.log("Error while get advertiser", error)
        return res.status(500).send({ error: "Y", message: "Internal server error" })
    }
}

const remove = async (req, res) => {
    const { id } = req.params
    try {
        const result = await advertiserService.getById({ id })
        if (!result) {
            return res.status(400).send({ error: "Y", message: "Invalid id" })
        }
        await Promise.all([
            advertiserService.remove({ id }),
            geoService.remove({ id: result.geo._id })
        ])
        return res.status(200).send({ error: "N", message: "Advertiser removed successfully" })
    } catch (error) {
        console.log("Error while get advertiser", error)
        return res.status(500).send({ error: "Y", message: "Internal server error" })
    }
}


module.exports = {
    create,
    get,
    update,
    remove,
    getAll
}