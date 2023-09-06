

module.exports = function getChartNames(data){
    let exist = []
    for(let i=0;i<data.length;i++){
        if(!exist.includes(data[i].name)){
            exist.push(data[i].name)
        }
    }
    return exist
}