let mongo = require("mongoose");

let user_model = mongo.Schema({
    user_name: {
        type: String,
        required: true
    },
    user_email: {
        type: String,
        required: true,
        unique: true
    },
    user_password: {
        type: String,
        required: true
    },
    user_age: {
        type: Number,
        required: true
    },
    country: {
        type: String,
        default:"Pakistan"
    },
    created_at: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongo.model("user_collection",user_model);