const CONTENTS_UPDATED = (state, contents) => {
	state.contents = contents;
};

const STEP_UPDATED = (state, step) => {
	state.step = step;
};

const ANIMAL_ID_UPDATED = (state, animalId) => {
	state.animalId = animalId;
};

export default {
    CONTENTS_UPDATED,
    STEP_UPDATED,
    ANIMAL_ID_UPDATED,
};
