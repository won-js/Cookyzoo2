module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			"character",
			[
				{
					name: "토끼",
					information: "귀엽다.",
					image: "rabbit.png",
					animation: "",
					unlock: 0,
				}, {
					name: "원숭이",
					information: "귀엽다.",
					image: "monkey.png",
					animation: "",
					unlock: 3,
				},
			],
			{});
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete(
			"character",
			{
				name: ["토끼", "원숭이"],
			},
			{},
		);
	},
};
