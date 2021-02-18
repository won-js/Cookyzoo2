module.exports = (sequelize, DataTypes) => {
	const ClassContent = sequelize.define("class_content", {
		step: {
			type: DataTypes.INTEGER.UNSIGNED,
			allowNull: false,
		},
		name: {
			type: DataTypes.STRING(20),
			allowNull: true,
		},
		subtitle: {
			type: DataTypes.STRING(500),
			allowNull: true,
		},
		class_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
	}, {
		timestamps: false,
		tableName: "class_content",
	});

	ClassContent.associate = function(models) {
		ClassContent.belongsTo(models.class, {
			foreignKey: "class_id",
			onDelete: "cascade",
		});
	};

	return ClassContent;
};
