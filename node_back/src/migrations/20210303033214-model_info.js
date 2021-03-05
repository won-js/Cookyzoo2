module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable(
			"model_info",
			{
				id: {
					allowNull: false,
					autoIncrement: true,
					primaryKey: true,
					type: Sequelize.INTEGER,
				},
				action_name: {
					type: Sequelize.STRING(20),
					allowNull: false,
					unique: true,
				},
				name: {
					type: Sequelize.STRING(30),
					allowNull: false,
				},
				metadata: {
					type: Sequelize.STRING(30),
					allowNull: false,
				},
				weight: {
					type: Sequelize.STRING(30),
					allowNull: false,
				},
			}, {
				charset: "utf8",
				collate: "utf8_general_ci",
			});
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable("model_info");
	},
};
