import mongoose from "mongoose";
import { RESOURCE } from "../../constant";

const options = {};

const schema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    resources: {
        type: [
            {
                url:
                {
                    type: String,
                    required: true
                },
                method:
                {
                    type: String,
                    required: true
                }
            }
        ],
    },
    deleted: {
        type: Boolean,
        default: false
    },
}, options);

export default mongoose.model(RESOURCE.ROLES, schema);
