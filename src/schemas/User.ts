import { Schema, model, Document} from 'mongoose'
import User from '../interfaces/UserInterface'

const UserSchema = new Schema({
    email: String,
    firstName: String,
    lastName: String
},{
    timestamps: true
})

export default model<User>('User', UserSchema)