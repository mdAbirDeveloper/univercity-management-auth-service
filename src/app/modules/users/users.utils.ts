import { User } from './users.model'

export const findLastUserId = async () => {
  const lastUser = await User.findOne({}, { id: 1, _id: 0 })
    .sort({
      createAt: -1,
    })
    .lean()

  return lastUser?.id
}

export const genereteUserId = async () => {
  const currentId = (await findLastUserId()) || (0).toString().padStart(5, '0')
  //increment id
  const incrementedId = (parseInt(currentId) + 1).toString().padStart(5, '0')
  return incrementedId

  // lastUserId++
  // return String(lastUserId).padStart(5, '0')
}
