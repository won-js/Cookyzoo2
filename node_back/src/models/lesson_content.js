module.exports = (sequelize, DataTypes) => {
	const LessonContent = sequelize.define("lesson_content", {
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
		video: {
			type: DataTypes.STRING(500),
			allowNull: true,
		},
	}, {
		indexes: [
			{
				unique: true,
				fields: ["lesson_id", "step"],
			},
		],
		timestamps: false,
		tableName: "lesson_content",
	});

	LessonContent.associate = function(models) {
		LessonContent.belongsTo(models.lesson, {
			foreignKey: "lesson_id",
			onDelete: "cascade",
		});
	};

	return LessonContent;
};
