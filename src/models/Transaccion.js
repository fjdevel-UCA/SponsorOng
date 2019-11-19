import Sequelize from 'sequelize';
import{ sequelize }from '../config/database';

const Transaccion = sequelize.define('transaccion',{
    idtransaccion:{
        type:Sequelize.INTEGER,
        primaryKey:true
    },
    idusuario:{type:Sequelize.INTEGER},
    idtipotransaccion:{type:Sequelize.INTEGER},
    idESTADO:{type:Sequelize.INTEGER},
},{timestamps:false,freezeTableName: true,})

export default Transaccion;