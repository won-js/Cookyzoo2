module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			"category",
			[
				{
					name: "촉각놀이",
				},
			],
			{});
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete(
			"category",
			{
				name: "촉각놀이",
			},
			{},
		);
	},
};
