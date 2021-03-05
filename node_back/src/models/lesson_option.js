module.exports = (sequelize, DataTypes) => {
	const LessonOption = sequelize.define("lesson_option", {
		name: {
			type: DataTypes.STRING(20),
			allowNull: false,
		},
		price: {
			type: DataTypes.INTEGER.UNSIGNED,
			allowNull: false,
		},
		description: {
			type: DataTypes.STRING(100),
			allowNull: false,
		},
		thumbnail: {
			type: DataTypes.STRING(100),
			allowNull: false,
		},
	}, {
		indexes: [
			{
				unique: true,
				fields: ["lesson_id", "name"],
			},
		],
		timestamps: false,
		tableName: "lesson_option",
	});

	LessonOption.associate = function(models) {
		LessonOption.belongsTo(models.lesson, {
			foreignKey: "lesson_id",
			onDelete: "cascade",
			onUpdate: "cascade",
		});
	};

	return LessonOption;
};
