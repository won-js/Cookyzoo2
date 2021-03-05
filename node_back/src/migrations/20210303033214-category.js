module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable(
			"category",
			{
				id: {
					allowNull: false,
					autoIncrement: true,
					primaryKey: true,
					type: Sequelize.INTEGER,
				},
				name: {
					type: Sequelize.STRING(20),
					allowNull: true,
					unique: true,
				},
			}, {
				charset: "utf8",
				collate: "utf8_general_ci",
			});
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable("category");
	},
};
