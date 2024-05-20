
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
function usermanagement(connection, gConfig) {
    var usermanagement = new Schema({
        assignedUsersJson: {
            type: Schema.Types.Mixed,
            require : true,
        },
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
        fulladdress: {
            type: String,
            require : true,
        },
        fullname: {
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
        lastpage: {
            type: String,
            require : true,
        },
        offlineDataID: {
            type: String,
            require : true,
            default: 0
        },
        organizationId: {
            type: String,
            require : true,
        },
        parentID: {
            type: String,
            require : true,
            default: 0
        },
        recordCountID: {
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
            ref: 'Usermanagement'
        },
    });
    gConfig.usermanagement = connection.model('usermanagement', usermanagement);
    return gConfig;
}
module.exports = usermanagement;