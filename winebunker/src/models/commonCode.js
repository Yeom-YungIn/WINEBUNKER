module.exports = function (sequelize, DataTypes) {
  const commonCode = sequelize.define(
    "commonCode",
    {
      cmmnSn: {
        field: "cmmn_sn",
        type: DataTypes.BIGINT(),
        allowNull: false,
      },
      code: {
        filed: "code",
        type: DataTypes.STRING(),
        unique: true,
        allowNull: false,
        primaryKey: true,
      },
      codeName: {
       field: "code_name",
       type: DataTypes.STRING(),
       allowNull: false,
      },
      codeNameKor: {
        field: "code_name_kor",
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
        timestamps: false,
        tableName: "common_code",
    }
  );
  return commonCode;
};
