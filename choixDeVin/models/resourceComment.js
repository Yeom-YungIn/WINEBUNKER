module.exports = function (sequelize, DataTypes) {
  const resourceComment = sequelize.define(
    "resource_comment",
    {
      id: {
        filed: "id",
        type: DataTypes.UUID(),
        unique: true,
        allowNull: false,
        primaryKey: true,
      },
      resourceId: {
        field: "resource_id",
        type: DataTypes.UUID(),
        allowNull: false,
      },
      commentorId: {
        field: "commentor_id",
        type: DataTypes.STRING(),
        allowNull: false,
      },
      comment: {
        field: "comment",
        type: DataTypes.STRING()
      },
      issued: {
        field: "issued",
        type: DataTypes.DATE(),
        allowNull: false,
      },
      modified: {
        field: "modified",
        type: DataTypes.DATE()
      },
    },
    {
      underscored: true,
      freezeTableName: true,
      tableName: "resource_comment",
    }
  );
  return resourceComment;
};
