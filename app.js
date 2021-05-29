  
const fetch = require("node-fetch")

var myArgs = process.argv.slice(2)
var month = myArgs[0]
var date = myArgs[1]


var link = "https://history.muffinlabs.com/date/"+month + "/"  + date

fetch(link)
.then(response => response.json())
.then(json => console.log(json))
.catch(err => console.log("Ërror : ", err))