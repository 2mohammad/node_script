const fs = require('fs')

function cat(file){
    fs.readFile(file, 'utf8', (err, data) =>{
        if(err){
            console.log("ERROR:", err)
            process.kill(1)
        }
        console.log("DATA...", data)
    })
}

module.exports = {
    cat: cat
}

