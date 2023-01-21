import mongoose from "mongoose";
import { RESOURCE } from "../../constant";

const options = {
    discriminatorKey: 'type',
    timeStamps: true
};

const schema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    type: {
        type: String
    },
    roles: {
        type: []
    },
    deleted: {
        type: Boolean,
        default: false
    },
}, options);

export default mongoose.model(RESOURCE.USERS.DEFAULT, schema);
