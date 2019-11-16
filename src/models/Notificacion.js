import Sequelize from 'sequelize';
import{ sequelize }from '../config/database';

const Notification = sequelize.define('notificacion',{
    idnotificacion:{
        type:Sequelize.INTEGER,
        primaryKey:true
    },
    owner:{type:Sequelize.INTEGER},
    trigger:{type:Sequelize.INTEGER},
    message:{type:Sequelize.STRING},
    icon:{type:Sequelize.STRING},
    color:{type:Sequelize.STRING},
},{timestamps:false,freezeTableName: true,})

export default Notification;