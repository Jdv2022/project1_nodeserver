const segregate = require('./segregate')
const allDates = require('./allDates')
const getChartNames = require('./chartnames')
const count = require('./countdates')
const totalperchart = require('./totalperchart')
const arrangetime = require('./arrangeTime')
const total = require('./total')
const ymax = require('./ymax')

module.exports = function process(trafficdata){ 
    
    try {

        /* Returns date from starting to end */
        const allDatesResult = allDates(trafficdata)

        /* Segregates data base on time */
        const orderTimeResult = arrangetime(trafficdata)

        /* Get all available chart names */
        const getChartnames = getChartNames(trafficdata)

        /* Segregate all dates based on their names */
        const newData = segregate(trafficdata, getChartnames)

        /* Simplify segregated data (newData), counts similar dates */
        const countedData = count(newData, allDatesResult)

        /* Gets total request per charts */
        const countperchart = totalperchart(countedData)

        /* Gets the overall total or number of data in db */
        const thistotal = total(countperchart)

        /* THis is to get get the peak request, use for y-axis */
        const temporary = ymax(countedData)

        const rethis = {
            getAll: orderTimeResult,
            getDates: allDatesResult,
            simplifyRes: countedData,
            simple: countperchart,
            total: thistotal,
            peak: temporary,
        }
    
        return rethis

    }
    catch{
        console.error('Error while requiring modules:', error)
    }

}