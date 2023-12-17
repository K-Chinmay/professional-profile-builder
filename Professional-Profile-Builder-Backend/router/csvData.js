
const fs = require('fs');
const excelToJson = require('convert-excel-to-json');


 const readPlacementCsv = (csvFile) => {
  const excelRawData = excelToJson({
    source: fs.readFileSync(csvFile.path), // fs.readFileSync return a Buffer
    header: { rows: 1 },
    columnToKey: { '*': '{{columnHeader}}' },
  });

  const placementData = [];

  for (let i = 0; i < excelRawData['placedata'].length; i++) {
    let placement = excelRawData['placedata'][i];

    let place = [];

    

    placementData.push({
      no: placement['Sr.No.'],
      code : placement['Student Code'],
      name: placement['Student Name'],
      company: placement['Company'],
      package: placement['Package'],      

    });
  }

  return placementData;
};

module.exports = readPlacementCsv;