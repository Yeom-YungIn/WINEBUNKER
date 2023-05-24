module.exports = function (sequelize, DataTypes) {
  const vin = sequelize.define(
    "vin",
    {
      vinSn: {
        field: "vin_sn",
        type: DataTypes.BIGINT(),
        unique: true,
        allowNull: false,
        primaryKey: true,
      },
      vinName: {
        field: "vin_name",
        type: DataTypes.STRING(),
        allowNull: false,
      },
      vinNameKor: {
        field: "vin_name_kor",
        type: DataTypes.STRING(),
        allowNull: false,
      },
      region: {
        field: "region",
        type: DataTypes.STRING(),
        allowNull: false,
      },
      type: {
        field: "type",
        type: DataTypes.STRING(),
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
      },
    },
    {
        // underscored: true,
        // freezeTableName: true,
        timestamps: false,
        tableName: "vin",
    }
  );

  vin.associate = function (models) {
      models.vin.belongsTo(models.resource, {
          foreignKey: 'vinSn',
          targetKey: 'vin',
          as: 'resource'
      })
  };
  return vin
};
