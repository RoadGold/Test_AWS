const {getAllVideos} = require("../services/video");


const getList = (req, res) => {
    res.send({data: getAllVideos()});
}

const getDetail = (req, res) => {
    res.send({data: "Detail"});
}

const updateItem = (req, res) => {
    res.send({data: "Update"});
}

const createItem = (req, res) => {  
    res.send({data: "Create"});
}

const deleteItem = (req, res) => {  
    res.send({data: "Delete"});
}

module.exports = {getDetail, getList, updateItem, createItem, deleteItem};