
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
function teams(connection, gConfig) {
    var teams = new Schema({
        createdBy: {
            type: String,
            require : true,
            default: ''
        },
        createdOn: {
            type: Date,
            require : true,
            default: new Date()
        },
        teamName: {
            type: String,
            require : true,
        },
        teamSlogan: {
            type: String,
            require : true,
        },
        teamCityName: {
            type: String,
            require : true,
            default: 1
        },
        teamOwnerName: {
            type: String,
            require : true,
            default: 0
        },
        status: {
            type: String,
            require : true,
            default: 'Active'
        },
        updatedBy: {
            type: String,
            require : true,
            default: ''
        },
        updatedOn: {
            type: Date,
            require : true,
            default: new Date()
        },
    });
    gConfig.teams = connection.model('teams', teams);
    return gConfig;
}
module.exports = teams;