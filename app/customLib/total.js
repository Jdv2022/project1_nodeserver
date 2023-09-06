


module.exports = function total(data){
    let total = 0
    for(const i in data){
        total = total + data[i]
    }
    return total
}