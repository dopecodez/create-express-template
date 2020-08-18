
module.exports = (sequelize, DataTypes) => {

  const ProjectResource = sequelize.define('projectResources', {
    id: {
      field: 'id',
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    payPerHour: {
      field: 'pay_per_hour',
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
    },
    resourceType: {
      field: 'resource_type',
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true,
      primaryKey: false,
    },
  }, {
    timestamps: false,
    tableName: 'project_resources',
    underscored: true,
  });

  return ProjectResource;
}