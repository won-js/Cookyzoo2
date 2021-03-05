module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			"lesson",
			[
				{
					name: "초코쿠키",
					price: 12000,
					thumbnail: "cookie.png",
					category_id: 1,
				},
			],
			{});
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete(
			"lesson",
			{
				name: "초코쿠키",
			},
			{},
		);
	},
};
