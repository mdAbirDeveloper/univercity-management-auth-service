import { Schema } from 'mongoose'
import IUser from './users.interface'

// 2. Create a Schema corresponding to the document interface.
const User = new Schema<IUser>({
  id: {},
})

export default User
