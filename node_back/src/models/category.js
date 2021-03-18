module.exports = (sequelize, DataTypes) => {
	const Category = sequelize.define("category", {
		name: {
			type: DataTypes.STRING(20),
			allowNull: true,
			unique: true,
		},
	}, {
		timestamps: false,
		tableName: "category",
	});

	Category.associate = function(models) {
		Category.hasMany(models.lesson, {
			foreignKey: "category_id",
			onDelete: "cascade",
			onUpdate: "cascade",
		});
	};
	return Category;
};
