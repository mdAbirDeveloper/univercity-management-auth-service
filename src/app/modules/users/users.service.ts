import config from '../../../config/index'
import { genereteUserId } from './users.utils'
import { IUser } from './users.interface'
import ApiError from '../../../errors/ApiError'
import { User } from './users.model'

const createUser = async (user: IUser): Promise<IUser | null> => {
  //auto genereted incremental id
  const id = await genereteUserId()
  user.id = id

  //default password

  if (!user.password) {
    user.password = config.default_user_pass as string
  }

  const createdUser = await User.create(user)
  if (!createUser) {
    throw new ApiError(400, 'faild to create user')
  }

  return createdUser
}

export default {
  createUser,
}