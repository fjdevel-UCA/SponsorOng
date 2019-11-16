import Sequelize from 'sequelize';
import{ sequelize }from '../config/database';

const Ong = sequelize.define('ong',{
    idong:{
        type:Sequelize.INTEGER,
        primaryKey:true
    },
    idusuario:{type:Sequelize.INTEGER},
    nombre_ong:{type:Sequelize.STRING},
    direccion:{type:Sequelize.STRING},
    email:{type:Sequelize.STRING},
    rubro_ong:{type:Sequelize.STRING},
    telefono:{type:Sequelize.STRING},
    representante:{type:Sequelize.STRING},
},{timestamps:false,freezeTableName: true,})

export default Ong;