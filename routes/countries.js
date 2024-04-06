const express = require('express');
const router = express.Router();
const data = require('../data/countries.json');

router.get('/', (req, res) => {
    res.status(200).json(data);
});

router.get('/:countryId', (req, res) =>{
    const requestedCountryId = req.params.countryId;
    const country = data.countries.filter(CountryInData => {
        if(CountryInData.id.toString() === requestedCountryId){
            return CountryInData;
        }
    });
        res.status(200).json(country);
});

module.exports = router;