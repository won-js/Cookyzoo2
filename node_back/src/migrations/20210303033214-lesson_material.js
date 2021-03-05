module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable(
			"lesson_material",
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
				},
				quantity: {
					type: Sequelize.INTEGER.UNSIGNED,
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
				"lesson_material", ["name", "lesson_id"], {
					unique: true,
				}),
			);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable("lesson_material");
	},
};
