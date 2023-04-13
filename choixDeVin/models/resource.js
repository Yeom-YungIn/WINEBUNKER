module.exports = function (sequelize, DataTypes) {
  const resource = sequelize.define(
    "resource",
    {
      id: {
        filed: "id",
        type: DataTypes.UUID(),
        unique: true,
        allowNull: false,
        primaryKey: true,
      },
      publisherId: {
        field: "publisher_id",
        type: DataTypes.STRING(),
        allowNull: false,
      },
      vin: {
        field: "vin",
        type: DataTypes.BIGINT(),
        allowNull: false,
      },
      description: {
        field: "description",
        type: DataTypes.STRING(),
        allowNull: false,
      },
      issued: {
        field: "issued",
        type: DataTypes.DATE(),
        allowNull: false,
      },
      modified: {
        field: "modified",
        type: DataTypes.DATE(),
        allowNull: false,
      },
    },
    {
      // underscored: true,
      // freezeTableName: true,
      tableName: "resource",
    }
  );

  resource.associate = function (models) {
      models.resource.belongsTo(models.vin, {
          foreignKey: 'vin',
          targetKey: 'vinSn',
          as: 'vinInfo'
      })
  }

  return resource
};
