module.exports = function (sequelize, DataTypes) {
  const resource = sequelize.define(
    "resource",
    {
      id: {
        filed: "id",
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        unique: true,
        allowNull: false,
        primaryKey: true,
      },
      publisherId: {
        field: "publisher_id",
        type: DataTypes.STRING
      },
      vinName: {
        field: "vin_name",
        type: DataTypes.STRING(),
        allowNull: true,
      },
      description: {
        field: "description",
        type: DataTypes.STRING(),
        allowNull: true,
      },
      purchaseDate: {
        field: "purchase_date",
        type: DataTypes.DATE,
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
      vinNameKor: {
          field: "vin_name_kor",
          type: DataTypes.STRING(),
          allowNull: false,
      },
    },
    {
        // underscored: true,
        // freezeTableName: true,
        timestamps: false,
        tableName: "resource",
    }
  );

  resource.associate = function (models) {
      models.resource.belongsTo(models.resourcePrice, {
          foreignKey: 'id',
          targetKey: 'resourceId',
          as: 'resourcePrice'
      })
  }

  return resource
};
