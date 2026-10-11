const multer = require("multer")
const path = require("path")
const crypto = require("crypto")
const fs = require("fs")

const uploadDir = path.join(__dirname, "..", "uploads")
fs.mkdirSync(uploadDir, { recursive: true })

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, uploadDir),
    filename: (req, file, cb) => {
        const ext = path.extname(file.originalname).toLowerCase()
        cb(null, `${Date.now()}-${crypto.randomBytes(8).toString("hex")}${ext}`)
    }
})

const fileFilter = (req, file, cb) => {
    const allowed = ["image/jpeg", "image/png", "image/webp", "image/gif"]
    allowed.includes(file.mimetype) ? cb(null, true):cb(new Error("Only JPG, PNG,WEBP, GIF images are allowed"))
}

const upload = multer({
    storage,
    fileFilter,
    limits: { fileSize: 5 * 1024 * 1024},
})

module.exports = upload