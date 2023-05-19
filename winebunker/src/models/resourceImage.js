module.exports = function (sequelize, DataTypes) {
  const resourceImage = sequelize.define(
    "resourceImage",
    {
      resourceId: {
        filed: "resource_id",
        type: DataTypes.UUID(),
        unique: true,
        allowNull: false,
        primaryKey: true,
      },
      image_location: {
        field: "imageLocation",
        type: DataTypes.STRING(),
        allowNull: false,
      },
      issued: {
        field: "issued",
        type: DataTypes.DATE(),
        allowNull: false,
      }
    },
    {
      underscored: true,
      freezeTableName: true,
      tableName: "resource_image",
    }
  );
  return resourceImage;
};
