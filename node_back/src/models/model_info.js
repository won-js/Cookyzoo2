module.exports = (sequelize, DataTypes) => {
	const modelInfo = sequelize.define("model_info", {
		action_name: {
			type: DataTypes.STRING(20),
			allowNull: false,
			unique: true,
		},
		name: {
			type: DataTypes.STRING(30),
			allowNull: false,
		},
		metadata: {
			type: DataTypes.STRING(30),
			allowNull: false,
		},
		weight: {
			type: DataTypes.STRING(30),
			allowNull: false,
		},
	}, {
		timestamps: false,
		tableName: "model_info",
	});

	return modelInfo;
};
