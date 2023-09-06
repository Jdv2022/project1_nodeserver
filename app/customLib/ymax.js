


module.exports = function ymax(data){
    let temp = 0
    for(const i in data){
        for(let j=0; j<data[i].length; j++){
            if(temp < data[i][j].value){
                temp = data[i][j].value
            }
        }
    }
    return temp
}