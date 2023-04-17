module.exports = function (sequelize, DataTypes) {
  const resourcePrice = sequelize.define(
    "resource_price",
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
      tableName: "resource_price",
    }
  );
  return resourcePrice;
};
