import Sequelize from 'sequelize';
import{ sequelize }from '../config/database';

const Tipotransaccion = sequelize.define('tipotransaccion',{
    idtipotransaccion:{
        type:Sequelize.INTEGER,
        primaryKey:true
    },
    tipo:{type:Sequelize.STRING},
},{timestamps:false,freezeTableName: true,})

export default Tipotransaccion;