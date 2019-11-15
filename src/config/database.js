import Sequelize from 'sequelize';

export const sequelize = new Sequelize(
    'besponsor',//name bd
    'besponsor',//name user
    'besponsor',//password
    {
        host:'localhost',
        dialect:'postgres',
        pool:{
            max:5,
            min:0,
            require:30000,
            idle:100000
        },
        logging:false
    }
)