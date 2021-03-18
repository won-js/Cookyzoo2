module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			"animal",
			[
				{
					name: "토끼",
					information: "귀엽다.",
					image: "rabbit.png",
					hover_image: "rabbit-jump.png",
					animation: "mellang2",
					unlock: 0,
				}, {
					name: "원숭이",
					information: "귀엽다.",
					image: "monkey.png",
					hover_image: "monkey-jump.png",
					animation: "",
					unlock: 3,
				}, {
					name: "코끼리",
					information: "코끼리 귀엽다.",
					image: "elephant.png",
					hover_image: "elephant-jump.png",
					animation: "",
					unlock: 3,
				}, {
					name: "펭귄",
					information: "펭귄 귀엽다.",
					image: "penguin.png",
					hover_image: "penguin-jump.png",
					animation: "",
					unlock: 3,
				},
			],
			{});
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete(
			"animal",
			{
				name: ["토끼", "원숭이", "코끼리", "펭귄"],
			},
			{},
		);
	},
};
