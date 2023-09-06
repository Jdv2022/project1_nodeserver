

module.exports = function segregate(data, names){
    let obj = {}
    for(let i=0; i<names.length; i++){
        let arr = []
        for(let j=0; j<data.length; j++){
            const d = new Date(data[j]['created@'])
            if(data[j].name == names[i]){
                arr.push(data[j]['created@'])
            }
        }
        obj[names[i]] = arr
    }

    return obj
} 