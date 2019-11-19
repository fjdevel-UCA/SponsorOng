import Sequelize from 'sequelize';
import{ sequelize }from '../config/database';

const Irregularidades = sequelize.define('irregularidades',{
    idirregularidad:{
        type:Sequelize.INTEGER,
        primaryKey:true
    },
    idtransaccion:{type:Sequelize.INTEGER},
    estado:{type:Sequelize.INTEGER},
    info:{type:Sequelize.STRING},
},{timestamps:false,freezeTableName: true,})

export default Irregularidades;