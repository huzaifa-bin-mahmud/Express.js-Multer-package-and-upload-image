const uploadImg = (req, res) => {
    if(!req.file){
        return res.status(400).json({
            success: false,
            message: "No file uyploaded"
        })
    }
    res.status(201).json({
        success: true,
        message: "Image uploaded successfully"
    })
}

module.exports = {
    uploadImg
}