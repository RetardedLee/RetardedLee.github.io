// mvComment
var sendRequest = require('../sendRequest.js')
const cloudPath = require("../cloudPath.js")

function vedioComment(req, res, next) {
    const albumid = req.query.id
    const data = {
        offset: req.query.offset || 0,
        rid: albumid,
        limit: req.query.limit || 20,
    }
    sendRequest(`${cloudPath.vedioComment}${albumid}`, data, req, res)
}
module.exports = vedioComment