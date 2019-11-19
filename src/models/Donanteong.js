import Sequelize from 'sequelize';
import{ sequelize }from '../config/database';

const Donanteong = sequelize.define('donanteong',{
    iddonanteong:{
        type:Sequelize.INTEGER,
        primaryKey:true
    },
    idong:{type:Sequelize.INTEGER},
    iddonante:{type:Sequelize.INTEGER},
    idsolicitud:{type:Sequelize.INTEGER},
},{timestamps:false,freezeTableName: true,})

export default Donanteong;