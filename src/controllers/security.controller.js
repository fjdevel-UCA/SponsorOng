import Usuario from "../models/Usuario";
import isLoggedIn from "../middlewares/securityMiddleware";
import bcrypt from 'bcrypt';

const saltRounds = 12;

export function test(req, res) {
  console.log(req.body)
  res.send("dato recibido")
}

export function login(req, res) {
  if (req.body.username === "" || req.body.password === "") {
    res.send("login failed")
  } else {
      const usuario = req.body.username
      const pass = req.body.password
    Usuario.findOne({where: {nombreusuario: usuario }}).then(user=>{
        if(!user)
            res.send(400)
        bcrypt.compare(pass,user.password,(err,data)=>{
            if(err) throw err
            if(data){
                res.send(200)
            }else{
                res.send(401);
            }
        })
    });
  }
}
