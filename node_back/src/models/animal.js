module.exports = (sequelize, DataTypes) => {
	const Animal = sequelize.define("animal", {
		name: {
			type: DataTypes.STRING(20),
			allowNull: false,
			unique: true,
		},
		information: {
			type: DataTypes.STRING(256),
			allowNull: false,
		},
		image: {
			type: DataTypes.STRING(128),
			allowNull: true,
		},
		hover_image: {
			type: DataTypes.STRING(128),
			allowNull: true,
		},
		animation: {
			type: DataTypes.STRING(128),
			allowNull: false,
		},
		unlock: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
	}, {
		timestamps: false,
		tableName: "animal",
	});

	return Animal;
};
