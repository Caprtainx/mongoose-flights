const Flight = require('../models/flights');

module.exports = {
    index,
    new: newFlight
}

function newFlight() {
    
}

function index(req, res) {
    Flight.find({}, function(err, flights) {
        res.render('movies/index', { movies })
    });
}