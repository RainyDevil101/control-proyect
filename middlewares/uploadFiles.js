const path = require('path');
const fs = require('fs');
const multer = require("multer");

const uploadFile = () => {

    // ELIMINAR EXCEL ANTERIOR
    
    const pathExcel = path.join(__dirname, '../uploads/file', 'users_excel.xlsx');

    if ( fs.existsSync(pathExcel) ) {
        fs.unlinkSync( pathExcel )
    }
    
    const storage = multer.diskStorage({
        destination: "./uploads/file",
        filename: function (_req, file, cb) {
            var extension = file.originalname.slice(file.originalname.lastIndexOf("."));
            cb(null, 'users_excel' + extension);
        },
    });
    
    const upload = multer({ storage: storage }).single("file");
 
    return upload;

}

module.exports = uploadFile;