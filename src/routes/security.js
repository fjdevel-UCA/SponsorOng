import {Router} from 'express';

const router = Router();

import {test,login, urlUser} from '../controllers/security.controller';
//ruta de prueba
// /api/security/
router.post('/',test);

// /api/security/login
router.post('/login',login);

// /api/security/urlUser
router.post('/urlUser',urlUser);


export default router;