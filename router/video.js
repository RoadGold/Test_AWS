const express = require('express');
const router = express.Router();
const {getDetail,
    getList,
    updateItem,
    createItem,
    deleteItem
} = require('../controllers/video');
const {checkOrigin} = require('../middlewares/origin');

//TODO http://localhost:3001/v1/video
/**
 * Lista de Videos
 */
router.get("/",getList);
router.get("/:id",getDetail);
router.post("/",createItem);
router.delete("/:id",checkOrigin, deleteItem);
router.put("/:id",updateItem);

module.exports = router;