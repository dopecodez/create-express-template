
module.exports = (sequelize, DataTypes) => {

const Project = sequelize.define('project',{
    id:{
        field: 'id',
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    projectName:{
        field: 'project_name',
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null,
        primaryKey: false,
    },
    currency:{
      field: 'currency',
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
  },
    projectType: {
      field: 'project_type',
      type: DataTypes.ENUM,
      values: ['TM','FC'],
      allowNull: false,
      primaryKey: false,
    },
    projectStatus: {
      field: 'project_status',
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true,
      primaryKey: false,
    },
  },{
    timestamps: false,
    underscored: true,
  });

  // Project belongsTo Manager
  Project.associate = function(models) {
    models.project.belongsTo(models.manager,{
      foreignKey: 'manager_id',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
    models.project.hasMany(models.projectResources,{
      foreignKey: 'project_id',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
    models.project.hasMany(models.milestone,{
      foreignKey: 'project_id',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
    models.project.hasMany(models.invoice,{
      foreignKey: 'project_id',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
  };

  return Project;
}