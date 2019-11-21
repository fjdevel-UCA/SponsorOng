import Sequelize from "sequelize";
import { sequelize } from "../config/database";

import Persona from "./Persona";
import Recurso from "./Recurso";

const Usuario = sequelize.define(
  "usuario",
  {
    idusuario: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    idtipousuario: { type: Sequelize.INTEGER },
    idestado: { type: Sequelize.INTEGER },
    nombreusuario: { type: Sequelize.STRING },
    password: { type: Sequelize.STRING }
  },
  { timestamps: false, freezeTableName: true }
);

Usuario.belongsTo(Persona, { foreignKey: "idpersona" });
Usuario.obtenerRecursos = async function(id) {
  let recurso = await sequelize.query(
    "select re.idrecurso, re.nombrerecurso,re.uri from usuario u inner join tipousuario t on u.idtipousuario=t.idtipousuario inner join permiso p on p.idtipousuario = t.idtipousuario inner join recurso re on re.idrecurso = p.idrecurso where u.idusuario=" +
      id,
    {
      model: Recurso,
      mapToModel: true
    }
  );
  return recurso;
};

Usuario.obtenerDatosUsuario = async function(){ 
  return await sequelize.query(
      "select u.idestado,u.idpersona,u.idtipousuario,u.idusuario,u.nombreusuario,p.correopersona,p.nombrepersona,p.telefonopersona,d.numerodocumento from usuario u inner join persona p on p.idpersona = u.idpersona inner join documentopersona d on d.iddocumentopersona=p.iddocumentopersona"
  );
};
export default Usuario;
