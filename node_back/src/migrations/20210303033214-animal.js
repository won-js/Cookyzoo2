module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable(
			"animal",
			{
				id: {
					allowNull: false,
					autoIncrement: true,
					primaryKey: true,
					type: Sequelize.INTEGER,
				},
				name: {
					type: Sequelize.STRING(20),
					allowNull: false,
					unique: true,
				},
				information: {
					type: Sequelize.STRING(256),
					allowNull: false,
				},
				image: {
					type: Sequelize.STRING(128),
					allowNull: true,
				},
				thumbnail: {
					type: Sequelize.STRING(128),
					allowNull: true,
				},
				animation: {
					type: Sequelize.STRING(128),
					allowNull: false,
				},
				unlock: {
					type: Sequelize.INTEGER,
					allowNull: false,
				},
			}, {
				charset: "utf8",
				collate: "utf8_general_ci",
			});
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable("animal");
	},
};
