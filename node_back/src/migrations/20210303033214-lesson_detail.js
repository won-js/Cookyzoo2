module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable(
			"lesson_detail",
			{
				id: {
					allowNull: false,
					autoIncrement: true,
					primaryKey: true,
					type: Sequelize.INTEGER,
				},
				image: {
					type: Sequelize.STRING(100),
					allowNull: false,
				},
				information: {
					type: Sequelize.STRING(500),
					allowNull: true,
				},
				lesson_id: {
					type: Sequelize.INTEGER,
					allowNull: false,
					onDelete: "cascade",
					onUpdate: "cascade",
					references: {
						model: "lesson",
						key: "id",
					},
				},
			}, {
				charset: "utf8",
				collate: "utf8_general_ci",
			});
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable("lesson_detail");
	},
};
