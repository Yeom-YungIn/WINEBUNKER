module.exports = function (sequelize, DataTypes) {
  const commonCode = sequelize.define(
    "commonCode",
    {
      code: {
        filed: "code",
        type: DataTypes.STRING(),
        unique: true,
        allowNull: false,
        primaryKey: true,
      },
      publisherId: {
        field: "code_name",
        type: DataTypes.STRING(),
        allowNull: false,
      },
      codeNameKr: {
        field: "code_name_kr",
        type: DataTypes.STRING(),
        allowNull: false,
      },
      sortOrder: {
        field: "sort_order",
        type: DataTypes.STRING(),
        allowNull: false,
      },
      description: {
         field: "description",
         type: DataTypes.STRING(),
      },
      issued: {
        field: "issued",
        type: DataTypes.DATE(),
        allowNull: false,
      },
      modified: {
        field: "modified",
        type: DataTypes.DATE(),
      },
    },
    {
      underscored: true,
      freezeTableName: true,
      tableName: "common_code",
    }
  );
  return commonCode;
};
