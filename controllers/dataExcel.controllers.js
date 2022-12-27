const { response, request } = require("express");
const XLSX = require("xlsx");
const path = require("path");

const createExcelFile = async (req = request, res = response) => {
    try {
        const name = req.body.category;
        const excel = req.body.dataToGenerateExcel;
        const { initDate, finDate } = req.body.dates;

        let objectMaxLength = [];

        for (let i = 0; i < excel.length; i++) {
            let value = Object.values(excel[i]);
            for (let j = 0; j < value.length; j++) {
                if (typeof value[j] == "number") {
                    objectMaxLength[j] = 10;
                } else {
                    objectMaxLength[j] =
                        objectMaxLength[j] >= value[j].length
                            ? objectMaxLength[j]
                            : value[j].length;
                }
            }
        }

        const wscols = objectMaxLength.map((w) => {
            return { width: w };
        });

        const worksheet = XLSX.utils.json_to_sheet(excel);

        worksheet["!cols"] = wscols;

        const workbook = XLSX.utils.book_new();

        XLSX.utils.book_append_sheet(workbook, worksheet, name);

        let fileName = `INFORME_${name}_${initDate}_${finDate}.xlsx`;

        const file = path.join(__dirname, "../uploads/file", fileName);

        XLSX.writeFile(workbook, file);

        res.status(200).download(file);
    } catch (error) {
        console.log(error);
    }
};

const downloadExcelFile = async (req = request, res = response) => {
    const fileName = req.body.fileName;

    const file = path.join(__dirname, "../uploads/file", fileName);

    res.download(file);
};

module.exports = {
    createExcelFile,
    downloadExcelFile,
};
