
module.exports = (sequelize, DataTypes) => {
const Manager = sequelize.define('manager',{
    id:{
        field: 'id',
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    managerName:{
        field: 'manager_name',
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null,
        primaryKey: false,
    },
    email: {
        field: 'email',
        type: DataTypes.STRING,
        allowNull: true,
        primaryKey: false,
      },
},{
    timestamps: false,
});

//  Manager hasMany Projects
    Manager.associate = function(models) {
        models.manager.hasMany(models.project,{
            foreignKey: 'manager_id',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          });
    };
    return Manager;
};