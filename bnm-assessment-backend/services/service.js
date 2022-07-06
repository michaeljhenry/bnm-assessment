const csv = require('csv-parser');
const fs = require('fs');

const getData = async (req, res, next) => {
    const results = [];
    return new Promise(function(resolve, reject) {

        fs.createReadStream('resources/data.csv')
        .pipe(csv())
        .on('data', (data) => results.push(data))
        .on('end', () => {
            const overviewNames = ['Sessions (Site Traffic)', 'Avg. Pages Viewed', 'Avg. Time on Site', 'Bounce Rate'];
            const trafficNames = ['Direct Traffic', 'Social Traffic', 'Referral Traffic', 'Display Traffic'];
            const sitePerformanceNames = ['Users', 'Two or More Sessions', 'Internal Page Entries', 'Sessions > 1 Min.'];
            const overviewDetails = []
            const trafficDetails = [];
            const sitePerformanceDetails = [];
        
            overviewNames.forEach((name) => {
                const info = {
                    name,
                    metricCount: name === 'Bounce Rate' ? results[0][name].slice(0,-2) : results[0][name],
                    weekOverWeekChange: results[1][name].slice(0,-4),
                    percentile: results[2][name]
                }
                overviewDetails.push(info);
            })
        
            trafficNames.forEach((name) => {
                const info = {
                    name,
                    metricCount: results[0][name],
                    weekOverWeekChange: results[1][name].slice(0,-4),
                    percentile: results[2][name]
                }
                trafficDetails.push(info);
            })
        
            sitePerformanceNames.forEach((name) => {
                const info = {
                    name,
                    metricCount: results[0][name],
                    weekOverWeekChange: results[1][name].slice(0,-4),
                    percentile: results[2][name]
                }
                sitePerformanceDetails.push(info);
            })
            const returnObj = {
                overview: overviewDetails,
                traffic: trafficDetails,
                sitePerformance: sitePerformanceDetails
            }
            resolve(returnObj);
        })
    })
}

exports.getData = getData;