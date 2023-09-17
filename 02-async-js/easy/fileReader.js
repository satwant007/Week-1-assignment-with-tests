const fs = require('fs');
const filePath = 'exampleFile.txt';

fs.readFile(filePath, 'utf8', basicFileReader);
console.log("Reading the file")

function basicFileReader(error, data) {
    if(error){
        console.log("error occurred while reading file : ",error);
    } else {
        console.log("Results of reading file : ",data);
    }

}