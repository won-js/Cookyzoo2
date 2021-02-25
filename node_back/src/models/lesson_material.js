module.exports = (sequelize, DataTypes) => {
	const LessonMaterial = sequelize.define("lesson_material", {
		name: {
			type: DataTypes.STRING(20),
			allowNull: true,
		},
		quantity: {
			type: DataTypes.INTEGER.UNSIGNED,
			allowNull: true,
		},
		lesson_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
	}, {
		timestamps: false,
		tableName: "lesson_material",
	});

	LessonMaterial.associate = function(models) {
		LessonMaterial.belongsTo(models.lesson, {
			foreignKey: "lesson_id",
			onDelete: "cascade",
		});
	};

	return LessonMaterial;
};
