import Sequelize from 'sequelize';
import{ sequelize }from '../config/database';

const Recurso = sequelize.define('recurso',{
    idrecurso:{
        type:Sequelize.INTEGER,
        primaryKey:true
    },
    nombrerecurso:{type:Sequelize.STRING},
    uri:{type:Sequelize.STRING},
},{timestamps:false,freezeTableName: true,})

export default Recurso;