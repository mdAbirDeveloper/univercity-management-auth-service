import express from 'express'
import usersControlar from './users.controlar'

const router = express.Router()
router.post('/create-user', usersControlar.createUser)

export default router
