import { Request, Response} from 'express'

import UserModel from '../schemas/User'
import User from '../interfaces/UserInterface'

class UserController {
       
    public async find(): Promise<User[]>{        
        return await UserModel.find()        
    }

    
}

export default new UserController()