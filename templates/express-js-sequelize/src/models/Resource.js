module.exports = (sequelize, DataTypes) => {
    const Resource = sequelize.define('resource',{
        id:{
            field: 'id',
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        resourceName:{
            field: 'resource_name',
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
            unique: true,
          },
    },{
        timestamps: false,
        underscored: true,
    });
    
    //  Manager hasMany Projects
    Resource.associate = function(models) {
            models.resource.hasMany(models.projectResources,{
                foreignKey: 'resource_id',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
              });
        };
        return Resource;
    };