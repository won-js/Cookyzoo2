const CONTENTS_UPDATED = (state, contents) => {
	state.contents = contents;
};

const STEP_UPDATED = (state, step) => {
	state.step = step;
};

export default {
    CONTENTS_UPDATED,
    STEP_UPDATED
};
