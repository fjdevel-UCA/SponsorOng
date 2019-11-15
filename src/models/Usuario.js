import Sequelize from 'sequelize';
import{ sequelize }from '../config/database';

import Persona from './Persona';
const Usuario = sequelize.define('usuario',{
    idusuario:{
        type:Sequelize.INTEGER,
        primaryKey:true
    },
    idtipousuario:{type:Sequelize.INTEGER},
    idestado:{type:Sequelize.INTEGER},
    nombreusuario:{type:Sequelize.STRING},
    password:{type:Sequelize.STRING}
},{timestamps:false,freezeTableName: true,});

Usuario.belongsTo(Persona,{foreignKey: 'idpersona'});

export default Usuario;