import {Router} from 'express'

import {listAllUser} from '../controllers/admin.controller'
const router = Router()

// /api/admin/getUsers
router.get('/users/all',listAllUser);

export default router;