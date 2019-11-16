import Sequelize from 'sequelize';
import{ sequelize }from '../config/database';

const Solicitud = sequelize.define('solicitud',{
    idsolicitud:{
        type:Sequelize.INTEGER,
        primaryKey:true
    },
    idestado:{type:Sequelize.STRING},
    motivo:{type:Sequelize.STRING},
},{timestamps:false,freezeTableName: true,})

export default Solicitud;