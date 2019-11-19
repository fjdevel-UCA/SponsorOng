import {Router} from 'express';

const router = Router();

import {login} from '../controllers/security.controller';


// /api/security/login
router.post('/login',login);
router.get('/logout',(req,res,next)=>{
    if (req.session) {
        // delete session object
        req.session.destroy();
      }
})


export default router;