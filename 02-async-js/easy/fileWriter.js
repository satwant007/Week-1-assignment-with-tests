const fs = require('fs');
const filePath = 'exampleFile.txt';

const dataToWrite = 'Version 1';

fs.writeFile(filePath, dataToWrite, 'utf8', basicFileWriter);

function basicFileWriter(error) {
    if(error){
        console.log("error occurred while writing file : ",error);
    } else {
        console.log("Writing to file successful.");
    }
}
