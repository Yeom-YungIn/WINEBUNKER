module.exports = function (sequelize, DataTypes) {
  const resourcePrice = sequelize.define(
    "resourcePrice",
    {
      resourceId: {
        filed: "resource_id",
        type: DataTypes.UUID(),
        unique: true,
        allowNull: false,
        primaryKey: true,
      },
      price: {
        field: "price",
        type: DataTypes.BIGINT(),
        allowNull: false,
      },
      store: {
        field: "store",
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
        underscored: true,
        freezeTableName: true,
        timestamps: false,
        tableName: "resource_price",
    }
  );

    resourcePrice.associate = function (models) {
        models.resourcePrice.belongsTo(models.resource, {
            foreignKey: 'resourceId',
            targetKey: 'id',
            as: 'resource'
        })
    };

  return resourcePrice;
};
