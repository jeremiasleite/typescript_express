import { Document} from 'mongoose'

export default interface User extends Document{
    email ?: string
    firstName ?: string
    lastName ?: string
}