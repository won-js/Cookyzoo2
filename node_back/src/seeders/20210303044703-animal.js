module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			"animal",
			[
				{
					name: "토끼",
					information: "귀엽다.",
					image: "rabbit.png",
					thumbnail: "rabbit-jump.png",
					animation: "mellang2.gltf",
					unlock: 0,
				}, {
					name: "원숭이",
					information: "귀엽다.",
					image: "monkey.png",
					thumbnail: "monkey-jump.png",
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
				name: ["토끼", "원숭이"],
			},
			{},
		);
	},
};
