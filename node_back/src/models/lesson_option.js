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
			type: DataTypes.STRING(50),
			allowNull: false,
		},
		thumbnail: {
			type: DataTypes.STRING(500),
			allowNull: false,
		},
		lesson_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
	}, {
		timestamps: false,
		tableName: "lesson_option",
	});

	LessonOption.associate = function(models) {
		LessonOption.belongsTo(models.lesson, {
			foreignKey: "lesson_id",
			onDelete: "cascade",
		});
	};

	return LessonOption;
};
