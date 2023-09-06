const convert_date = require('./convertdate') 
const dym = require('./dym')
module.exports = function allDates(data){
    let min = convert_date(data[0]['created@'])
    let max = convert_date(data[0]['created@'])
    for(let i=0; i<data.length; i++){
        const thisDate = convert_date(data[i]['created@'])
        if(max <= thisDate){
            max = thisDate
        }
        if(min >= thisDate){
            min = thisDate
        }
    }
    return dateBetween(min, max)
}

function dateBetween(start, end){
    let allDates = []
    while(start <= end){
        allDates.push(dym(start))
        x = new Date(start)
        const m = x.getMonth()
        const y = x.getFullYear()
        const d = x.getDate() + 1
        start = new Date(y, m, d)
    }
    return allDates
}