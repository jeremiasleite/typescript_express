import { Schema, model} from 'mongoose'

const UserSchema = new Schema({
    email: String,
    firstName: String
},{
    timestamps: true
})

export default model('User', UserSchema)