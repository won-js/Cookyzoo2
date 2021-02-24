module.exports = (sequelize, DataTypes) => {
	const Lesson = sequelize.define("lesson", {
		name: {
			type: DataTypes.STRING(50),
			allowNull: false,
		},
		price: {
			type: DataTypes.INTEGER.UNSIGNED,
			allowNull: false,
		},
		thumbnail: {
			type: DataTypes.STRING(500),
			allowNull: true,
		},
		category_id: {
			type: DataTypes.INTEGER,
			allowNull: true,
		},
	}, {
		timestamps: false,
		tableName: "lesson",
	});

	Lesson.associate = function(models) {
		Lesson.belongsTo(models.category, {
			foreignKey: "category_id",
			onDelete: "cascade",
		});
	};

	Lesson.associate = function(models) {
		Lesson.hasone(models.lesson_detail, {
			foreignKey: "lesson_id",
			onDelete: "cascade",
		});
	};

	Lesson.associate = function(models) {
		Lesson.hasMany(models.lesson_content, {
			foreignKey: "lesson_id",
			onDelete: "cascade",
		});
	};

	Lesson.associate = function(models) {
		Lesson.hasMany(models.lesson_option, {
			foreignKey: "lesson_id",
			onDelete: "cascade",
		});
	};

	Lesson.associate = function(models) {
		Lesson.hasMany(models.lesson_material, {
			foreignKey: "lesson_id",
			onDelete: "cascade",
		});
	};

	return Lesson;
};
