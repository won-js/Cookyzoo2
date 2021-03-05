module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			"lesson_content",
			[
				{
					step: 1,
					name: "버터 녹이기",
					subtitle: "전자렌지로 버터를 녹여주세요",
					video: "1.mp4",
					lesson_id: 1,
				}, {
					step: 2,
					name: "계란 넣기",
					subtitle: "녹은 버터에 계란을 넣어주세요",
					video: "2.mp4",
					lesson_id: 1,
				}, {
					step: 3,
					name: "믹스 섞기",
					subtitle: "믹스를 섞어주세요",
					video: "3.mp4",
					lesson_id: 1,
				}, {
					step: 4,
					name: "믹스 반죽하기",
					subtitle: "믹스를 반죽해주세요",
					video: "4.mp4",
					lesson_id: 1,
				},
			],
			{});
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete(
			"lesson_content",
			{
				lesson_id: 1,
			},
			{},
		);
	},
};
