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

const MOTION_UPDATED = (state, motion) => {
    state.motion = motion;
};

const ACTIVE_UPDATED = (state, active) => {
    state.active = active;
};

export default {
    CONTENTS_UPDATED,
    STEP_UPDATED,
    SUCCESS_UPDATED,
    ANIMAL_ANIMATION_UPDATED,
    START_UPDATED,
    MOTION_UPDATED,
    ACTIVE_UPDATED,
};
