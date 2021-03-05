module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable(
			"lesson_content",
			{
				id: {
					allowNull: false,
					autoIncrement: true,
					primaryKey: true,
					type: Sequelize.INTEGER,
				},
				step: {
					type: Sequelize.INTEGER.UNSIGNED,
					allowNull: false,
				},
				name: {
					type: Sequelize.STRING(20),
					allowNull: true,
				},
				subtitle: {
					type: Sequelize.STRING(500),
					allowNull: true,
				},
				video: {
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
			})
			.then(() => queryInterface.addIndex(
				"lesson_content", ["step", "lesson_id"], {
					unique: true,
				}),
			);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable("lesson_content");
	},
};
