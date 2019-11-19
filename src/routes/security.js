import {Router} from 'express';

const router = Router();

import {login} from '../controllers/security.controller';


// /api/security/login
router.post('/login',login);
router.post('/logout',(req,res,next)=>{
    if (req.session) {
        // delete session object
        req.session.destroy(function(err) {
          if(err) {
            return next(err);
          } else {
            return res.redirect('/');
          }
        });
      }
})


export default router;