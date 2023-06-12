import express from 'express'
import { UserControlar } from './user.controlar'

const router = express.Router()

router.post('/create-user', UserControlar.createUser)

export const UserRoutes = { router }
