module.exports = (sequelize, DataTypes) => {
	const LessonDetail = sequelize.define("lesson_detail", {
		image: {
			type: DataTypes.STRING(500),
			allowNull: false,
		},
		information: {
			type: DataTypes.STRING(500),
			allowNull: true,
		},
		lesson_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
	}, {
		timestamps: false,
		tableName: "lesson_detail",
	});

	LessonDetail.associate = function(models) {
		LessonDetail.belongsTo(models.lesson, {
			foreignKey: "lesson_id",
			onDelete: "cascade",
		});
	};

	return LessonDetail;
};
