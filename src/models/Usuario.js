import Sequelize from 'sequelize';
import{ sequelize }from '../config/database';

import Persona from './Persona';
import Recurso from './Recurso';

const Usuario = sequelize.define('usuario',{
    idusuario:{
        type:Sequelize.INTEGER,
        primaryKey:true
    },
    idtipousuario:{type:Sequelize.INTEGER},
    idestado:{type:Sequelize.INTEGER},
    nombreusuario:{type:Sequelize.STRING},
    password:{type:Sequelize.STRING}
},{timestamps:false,freezeTableName: true});

Usuario.belongsTo(Persona,{foreignKey: 'idpersona'});
Usuario.obtenerRecursos =async function(id){
    let recurso = await sequelize.query("select re.nombrerecurso,re.uri from usuario u inner join tipousuario t on u.idtipousuario=t.idtipousuario inner join permiso p on p.idtipousuario = t.idtipousuario inner join recurso re on re.idrecurso = p.idrecurso where u.idusuario="+id,{
        model:Recurso,
        mapToModel:true
    })
    return recurso
}
export default Usuario;