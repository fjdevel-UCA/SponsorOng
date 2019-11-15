import Sequelize from 'sequelize';
import{ sequelize }from '../config/database';

const Persona = sequelize.define('persona',{
    idpersona:{
        type:Sequelize.INTEGER,
        primaryKey:true
    },
    nombrepersona:{type:Sequelize.STRING},
    telefonopersona:{type:Sequelize.STRING},
    correopersona:{type:Sequelize.STRING},
    iddocumentopersona:{type:Sequelize.INTEGER}
},{timestamps:false});


export default Persona;