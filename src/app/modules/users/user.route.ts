import express from 'express'
import usersControlar from './user.controlar'

const router = express.Router()
router.post('/create-user', usersControlar.createUser)

export default router
