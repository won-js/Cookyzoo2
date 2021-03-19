module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			"lesson",
			[
				{
					name: "초코쿠키 만들기",
					price: 12000,
					thumbnail: "cookie.png",
					information: "맛있는 초코쿠키 만들기~",
					category_id: 1,
				}, {
					name: "브라우니 만들기",
					price: 15000,
					thumbnail: "brownie.png",
					information: "촉촉하고 쫀득한 브라우니를 만들어보자! ",
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
