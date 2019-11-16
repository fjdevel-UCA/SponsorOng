import Sequelize from 'sequelize';
import{ sequelize }from '../config/database';

const Tipousuario = sequelize.define('tipousuario',{
    idtipousuario:{
        type:Sequelize.INTEGER,
        primaryKey:true
    },
    nombretipousuario:{type:Sequelize.STRING},
},{timestamps:false,freezeTableName: true,})

export default Tipousuario;