module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable(
			"lesson",
			{
				id: {
					allowNull: false,
					autoIncrement: true,
					primaryKey: true,
					type: Sequelize.INTEGER,
				},
				name: {
					type: Sequelize.STRING(50),
					allowNull: false,
					unique: true,
				},
				price: {
					type: Sequelize.INTEGER.UNSIGNED,
					allowNull: false,
				},
				thumbnail: {
					type: Sequelize.STRING(100),
					allowNull: true,
				},
				category_id: {
					type: Sequelize.INTEGER,
					allowNull: false,
					onDelete: "cascade",
					onUpdate: "cascade",
					references: {
						model: "category",
						key: "id",

					},
				},
			}, {
				charset: "utf8",
				collate: "utf8_general_ci",
			});
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable("lesson");
	},
};
