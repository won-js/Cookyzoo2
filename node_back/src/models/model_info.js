module.exports = (sequelize, DataTypes) => {
	const modelInfo = sequelize.define("model_info", {
		action_name: {
			type: DataTypes.STRING(40),
			allowNull: false,
			unique: true,
		},
		name: {
			type: DataTypes.STRING(40),
			allowNull: false,
		},
		metadata: {
			type: DataTypes.STRING(40),
			allowNull: false,
		},
		weights: {
			type: DataTypes.STRING(40),
			allowNull: false,
		},
	}, {
		timestamps: false,
		tableName: "model_info",
	});

	return modelInfo;
};
