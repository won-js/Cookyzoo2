module.exports = (sequelize, DataTypes) => {
	const Character = sequelize.define("character", {
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
		tableName: "character",
	});

	return Character;
};
