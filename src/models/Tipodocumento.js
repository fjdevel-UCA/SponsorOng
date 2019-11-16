import Sequelize from 'sequelize';
import{ sequelize }from '../config/database';

const Tipodocumento = sequelize.define('tipodocumento',{
    idtipodocumento:{
        type:Sequelize.INTEGER,
        primaryKey:true
    },
    nombredocumento:{type:Sequelize.STRING},
},{timestamps:false,freezeTableName: true,})

export default Tipodocumento;