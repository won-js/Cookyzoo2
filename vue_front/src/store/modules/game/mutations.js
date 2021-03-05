const CONTENTS_UPDATED = (state, contents) => {
	state.contents = contents;
};

const STEP_UPDATED = (state, step) => {
	state.step = step;
};

const SUCCESS_UPDATED = (state, success) => {
    state.success = success;
};

export default {
    CONTENTS_UPDATED,
    STEP_UPDATED,
    SUCCESS_UPDATED,
};
