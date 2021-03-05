module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable(
			"lesson_option",
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
				},
				price: {
					type: Sequelize.INTEGER.UNSIGNED,
					allowNull: false,
				},
				description: {
					type: Sequelize.STRING(100),
					allowNull: false,
				},
				thumbnail: {
					type: Sequelize.STRING(100),
					allowNull: false,
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
				"lesson_option", ["name", "lesson_id"], {
					unique: true,
				}),
			);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable("lesson_option");
	},
};
