import Sequelize from 'sequelize';
import{ sequelize }from '../config/database';

const Estado = sequelize.define('estado',{
    idestado:{
        type:Sequelize.INTEGER,
        primaryKey:true
    },
    estado:{type:Sequelize.STRING},
    descripcionestado:{type:Sequelize.STRING},
},{timestamps:false,freezeTableName: true,})

export default Estado;