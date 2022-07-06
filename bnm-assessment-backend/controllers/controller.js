const services = require('../services/service');

const getData = async (req, res) => {
    const data = await services.getData();
    res.json({data})
}

exports.getData = getData; 