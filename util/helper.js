const moment = require('moment')
function formatTIME(data){
    let formatTime = moment(data).fromNow(true)
    return formatTime
}
function formateDATE(data){
    let formateDate = moment(data).format("dddd, MMMM Do YYYY, h:mm:ss a")
    return formateDate
}

module.exports ={
    formatTIME:formatTIME,
    formateDATE:formateDATE
} 
