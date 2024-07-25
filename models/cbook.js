import { model, Schema } from "mongoose";
// import { toJSON } from "@reis/mongoose-to-json";


const contactSchema = new Schema ({
    name: { type: String, required: true},
    phone: { type: Number},
    // createdAt: { type: Date, default: Date.now()}
},{
    timestamps: true

});

// contactSchema.plugin(toJSON);

export const ContactModel = model('contact', contactSchema);