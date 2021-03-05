module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			"lesson_material",
			[
				{
					name: "버터 20g",
					quantity: 1,
					lesson_id: 1,
				}, {
					name: "계란",
					quantity: 2,
					lesson_id: 1,
				}, {
					name: "반죽 믹스 200g",
					quantity: 1,
					lesson_id: 1,
				}, {
					name: "초코칩 50g",
					quantity: 1,
					lesson_id: 1,
				},
			],
			{});
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete(
			"lesson_material",
			{
				lesson_id: 1,
			},
			{},
		);
	},
};
