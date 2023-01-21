import mongoose from "mongoose";
import users from '../users.model'
import { RESOURCE } from "../../../constant";

const options = {
    discriminatorKey: 'type',
    timeStamps: true
};

const schema = new mongoose.Schema({
    roles: {
        type: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: RESOURCE.ROLES
        }],
        default: []
    }
}, options);

export default users.discriminator(RESOURCE.USERS.ADMIN, schema);
