import Sequelize from 'sequelize';
import{ sequelize }from '../config/database';

const Permiso = sequelize.define('permiso',{
    idpermiso:{
        type:Sequelize.INTEGER,
        primaryKey:true
    },
    idtipousuario:{type:Sequelize.INTEGER},
    idrecurso:{type:Sequelize.INTEGER},
},{timestamps:false,freezeTableName: true,})

export default Permiso;