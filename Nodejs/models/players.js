
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
function players(connection, gConfig) {
    var players = new Schema({
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
        playerName: {
            type: String,
            require : true,
        },
        highestScore: {
            type: Number,
            require : true,
        },
        city: {
            type: String,
            require : true,
        },
        isActive: {
            type: Number,
            require : true,
            default: 1
        },
        isDelete: {
            type: Number,
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
        userId: {
            type: Schema.Types.ObjectId,
            require : true,
            ref: 'players'
        },
        teamID: {
            type: Schema.Types.ObjectId,
            require : true,
            ref: 'teams'
        },
    });
    gConfig.players = connection.model('players', players);
    return gConfig;
}
module.exports = players;