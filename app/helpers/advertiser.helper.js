const parseReqData = (reqData) => {
    const { token, device, geo, file, originalFile, advertiser, url, ip,
        accountId, tagline, recordTime, cta } = reqData

    const advertiserData = {}, geoData = {}

    if (token) advertiserData.token = token
    if (device) advertiserData.device = device
    if (file) advertiserData.file = file
    if (originalFile) advertiserData.originalFile = originalFile
    if (advertiser) advertiserData.advertiser = advertiser
    if (url) advertiserData.url = url
    if (ip) advertiserData.ip = ip
    if (accountId) advertiserData.accountId = accountId
    if (tagline) advertiserData.tagline = tagline
    if (recordTime) advertiserData.recordTime = recordTime
    if (cta) advertiserData.cta = cta

    if (geo) {
        const { continentCode, continentName, countryCode, countryName, regionCode, regionName } = geo
        if (continentCode) geoData.continentCode = continentCode
        if (continentName) geoData.continentName = continentName
        if (countryCode) geoData.countryCode = countryCode
        if (countryName) geoData.countryName = countryName
        if (regionCode) geoData.regionCode = regionCode
        if (regionName) geoData.regionName = regionName
    }

    return { advertiserData, geoData }
}

const parseValidation = (err) => {
    const errors = []

    for (field in err.errors) {
        errors.push({
            path: err.errors[field].path,
            message: err.errors[field].message
        })
    }
    return errors
}


module.exports = { parseReqData, parseValidation }