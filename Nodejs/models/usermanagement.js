
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
function usermanagement(connection, gConfig) {
    var usermanagement = new Schema({
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
        name: {
            type: String,
            require : true,
        },
        email: {
            type: String,
            require : true,
        },
        password: {
            type: String,
            require : true,
        },
        mobileNumber: {
            type: Number,
            require : true,
        },
        userRole: {
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
            default: 'Pending'
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
            ref: 'usermanagement'
        },
        subscribedTeamID: {
            type: Schema.Types.ObjectId,
            require : true,
            ref: 'teams'
        },
    });
    gConfig.usermanagement = connection.model('usermanagement', usermanagement);
    return gConfig;
}
module.exports = usermanagement;