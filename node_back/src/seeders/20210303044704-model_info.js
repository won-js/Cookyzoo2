module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			"model_info",
			[
				{
					action_name: "across_model",
					name: "across_model.json",
					metadata: "across_model_meta.json",
                    weights: "across_model.weights.bin",
				},
				{
                    action_name: "stretchLeft",
					name: "stretchLeft_model.json",
					metadata: "stretchLeft_model_meta.json",
                    weights: "stretchLeft_model.weights.bin",
				},
                {
                    action_name: "stretchRight",
                    name: "stretchRight_model.json",
                    metadata: "stretchRight_model_meta.json",
                    weights: "stretchRight_model.weights.bin",
                },
                {
                    action_name: "upCircle",
                    name: "upCircle_model.json",
                    metadata: "upCircle_model_meta.json",
                    weights: "upCircle_model.weights.bin",
                },
                {
                    action_name: "upRight",
                    name: "upRight_model.json",
                    metadata: "upRight_model_meta.json",
                    weights: "upRight_model.weights.bin",
                },
                {
                    action_name: "wave",
                    name: "wave_model.json",
                    metadata: "wave_model_meta.json",
                    weights: "wave_model.weights.bin",
                },
                {
                    action_name: "zzangLeft",
                    name: "zzangLeft_model.json",
                    metadata: "zzangLeft_model_meta.json",
                    weights: "zzangLeft_model.weights.bin",
                },
                {
                    action_name: "zzangRight",
                    name: "zzangRight_model.json",
                    metadata: "zzangRight_model_meta.json",
                    weights: "zzangRight_model.weights.bin",
                },
			],
			{});
	},

	down: async (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('model_info', null, {});
	},
};
