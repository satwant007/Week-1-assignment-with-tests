const fs = require('fs');
const filePath = 'exampleFile.txt';
try{
    var data = fs.readFileSync(filePath, 'utf8');
    let counter = 1 + parseInt(data.substr(-1)) || 0 ;

    var updatedVersion = "Version "+counter.toString();

    fs.writeFileSync(filePath, updatedVersion, 'utf8');
    console.log('Counter has been incremented and updated in the file.');
}
catch (error){
    console.log("Error : ", error)
}