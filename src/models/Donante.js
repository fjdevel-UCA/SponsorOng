import Sequelize from 'sequelize';
import{ sequelize }from '../config/database';

const Donante = sequelize.define('donante',{
    iddonante:{
        type:Sequelize.INTEGER,
        primaryKey:true
    },
    nombre:{type:Sequelize.STRING},
    email:{type:Sequelize.STRING},
    telefono:{type:Sequelize.STRING},
    pais:{type:Sequelize.STRING},
},{timestamps:false,freezeTableName: true,})

export default Donante;