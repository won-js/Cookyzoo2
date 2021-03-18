module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			"lesson_content",
			[
				{
					step: 1,
					name: "버터 녹이기",
					subtitle: "전자렌지로 버터와 초코칩을 녹여주세요",
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
				}, {
					step: 1,
					name: "버터 & 초콜렛 녹이기",
					subtitle: "전자렌지로 버터와 초콜렛을 녹여주세요",
					video: "brownie1.mp4",
					lesson_id: 2,
				}, {
					step: 2,
					name: "버터 & 초콜렛 섞기",
					subtitle: "녹인 버터와 초콜렛을 섞어주세요",
					video: "brownie2.mp4",
					lesson_id: 2,
				}, {
					step: 3,
					name: "설탕 넣기",
					subtitle: "설탕을 넣고 다시 한 번 섞어주세요",
					video: "brownie3.mp4",
					lesson_id: 2,
				}, {
					step: 4,
					name: "계란 넣기",
					subtitle: "계란을 넣고 다시 한 번 섞어주세요",
					video: "brownie4.mp4",
					lesson_id: 2,
				}, {
					step: 5,
					name: "믹스 섞기",
					subtitle: "믹스를 넣고 잘 섞어주세요",
					video: "brownie5.mp4",
					lesson_id: 2,
				}, {
					step: 6,
					name: "믹스 반죽하기",
					subtitle: "믹스를 잘 반죽해주세요",
					video: "brownie6.mp4",
					lesson_id: 2,
				}, {
					step: 7,
					name: "반죽 위에 도핑 올리기",
					subtitle: "반죽에 초콜렛 도핑을 올려주세요",
					video: "brownie7.mp4",
					lesson_id: 2,
				}, {
					step: 8,
					name: "전자렌지에 돌리기",
					subtitle: "전자렌지로 반죽을 돌리고, 완성된 브라우니에 설탕을 뿌려주면 완성~",
					video: "brownie8.mp4",
					lesson_id: 2,
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
