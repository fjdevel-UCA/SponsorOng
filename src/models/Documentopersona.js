import Sequelize from 'sequelize';
import{ sequelize }from '../config/database';

const Documentopersona = sequelize.define('documentopersona',{
    iddocumentopersona:{
        type:Sequelize.INTEGER,
        primaryKey:true
    },
    idtipodocumento:{type:Sequelize.INTEGER},
    idnumerodocumento:{type:Sequelize.INTEGER},
},{timestamps:false,freezeTableName: true,});

export default Documentopersona;