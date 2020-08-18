
module.exports = (sequelize, DataTypes) => {
    const AccessToken = sequelize.define('accessToken',{
        id:{
            field: 'id',
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        userId:{
            field: 'user_id',
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: false,
        },
        accessToken: {
            field: 'access_token',
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: false,
        },
        createdAt: {
            field: 'created_at',
            type: DataTypes.DATE,
            allowNull: true,
            default: sequelize.fn('NOW')
          },
    },{
        timestamps: false,
    });
    return AccessToken;
};