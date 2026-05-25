const { sequelize } = require("@core/config/sequelize");
const { DataTypes } = require("sequelize");

const reviewModel = sequelize.define(
  "Review",
  {
    review_id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    user_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "users",
        key: "userId",
      },
    },
    dish_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "dishes",
        key: "dish_id",
      },
    },
    points: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        min: 0,
        max: 5,
      },
    },
    content: { type: DataTypes.TEXT },
    created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    updated_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  },
  {
    tableName: "reviews",
    timestamps: false,
  },
);

module.exports = reviewModel;
