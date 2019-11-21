import Usuario from "../models/Usuario";

export function listAllUser(req,res){
    Usuario.obtenerDatosUsuario().then(usuarios=>{
        res.status(200).send(JSON.stringify(usuarios[0]));
    });
    
}