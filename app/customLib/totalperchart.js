


module.exports = function totalperchart(data){
    let sum = 0
    let obj = {}
    for(const i in data){
        for(let j=0; j<data[i].length; j++){
            sum = sum + data[i][j].value
        }
        obj[i] = sum
        sum = 0
    }
    return obj
}