const dym = require('./dym')

module.exports = function count(data, dates){
    let obj = {}
    for(const i in data){
        let exist = []
        for(let k=0; k<dates.length; k++){
            let count = 0
            const up = dates[k]
            for(let j=0; j<data[i].length; j++){
                const dow = dym(data[i][j])
                if( up == dow ){
                    count++
                }
            }
            const date = dates[k]
            exist.push({ date: date, value: count  })
        }
        obj[i] = exist
    }
    return obj
}