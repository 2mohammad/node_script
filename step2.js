const { default: axios } = require('axios')
const {cat} = require('./step1')
const fs = require('fs')
const dumbf = async (name) => {return await axios.get(name)} 

function readSource(source, name){
    if (name.split('www.').length > 1){
        dumbf(name)
        .then((msg) => {console.log(msg, source)})
        }

    else {
        console.log(cat(name), source)
    }
}


module.exports = {
    cats:readSource
}