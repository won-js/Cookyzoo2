const CONTENTS_UPDATED = (state, contents) => {
	state.contents = contents;
};

const STEP_UPDATED = (state, step) => {
	state.step = step;
};

const SUCCESS_UPDATED = (state, success) => {
    state.success = success;
};

const ANIMAL_ANIMATION_UPDATED = (state, animalAnimation) => {
	state.animalAnimation = animalAnimation;
};

const START_UPDATED = (state, start) => {
    state.start = start;
};

export default {
    CONTENTS_UPDATED,
    STEP_UPDATED,
    SUCCESS_UPDATED,
    ANIMAL_ANIMATION_UPDATED,
    START_UPDATED,
};
