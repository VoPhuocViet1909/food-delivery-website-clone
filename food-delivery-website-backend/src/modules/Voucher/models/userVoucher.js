const { sequelize } = require("@core/config/sequelize");
const { DataTypes } = require("sequelize");

const UserVoucher = sequelize.define(
  "UserVoucher",
  {
    account_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "users",
        key: "userId",
      },
    },
    voucher_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "vouchers",
        key: "voucher_id",
      },
    },
    used_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  },
  {
    tableName: "user_vouchers",
    timestamps: false,
  },
);

module.exports = UserVoucher;
