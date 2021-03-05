module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			"model_info",
			[
				{
					action_name: "1",
					name: "1",
					metadata: "1",
					weight: "1",
				}, {
					action_name: "2",
					name: "2",
					metadata: "2",
					weight: "2",
				}, {
					action_name: "3",
					name: "3",
					metadata: "3",
					weight: "3",
				}, {
					action_name: "4",
					name: "4",
					metadata: "4",
					weight: "4",
				},
			],
			{});
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete(
			"model_info",
			{
				action_name: ["1", "2", "3", "4"],
			},
			{},
		);
	},
};
