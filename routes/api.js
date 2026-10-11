const express = require('express');
const { uploadImg } = require('../controllers/apiController');
const upload=require ("../middleware/upload")

const router = express.Router()

router.post("/upload-image",upload.single("image",uploadImg))






module.exports = router