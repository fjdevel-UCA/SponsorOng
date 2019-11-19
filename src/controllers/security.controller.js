import Usuario from "../models/Usuario";
import bcrypt from "bcrypt";


export function login(req, res) {
  if(req.session){
    console.log("ya esta logueado")
  }
  if (req.body.username === "" || req.body.password === "") {
    res.send("login failed");
  } else {
    const usuario = req.body.username;
    const pass = req.body.password;
    Usuario.findOne({ where: { nombreusuario: usuario } }).then(user => {
      if (!user) {
        res.status(400).send("verifique el usuario o la contraseña");
      } else {
        bcrypt.compare(pass, user.password, (err, data) => {
          if (err) throw err;
          if (data) {
            req.session.username = user.nombreusuario
            if(user.idtipousuario==1)
              req.session.admin=true
            req.session.recursos = Usuario.obtenerRecursos(user.idusuario)
            req.session.save();
            res.status(200).send({'redirect':'/'});
          } else {
            res.status(401).send("verifique el usuario o la contraseña");
          }
        });
      }
    });
  }
}
